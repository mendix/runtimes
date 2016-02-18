module.exports = function(grunt) {
    var path = require("path"),
        tmpDir = path.join(grunt.option("deploymentDir"), "data", "tmp"),
        configFile = path.join(grunt.option("deploymentDir"), "widgets.config.json"),
        buildProfile = path.join(tmpDir, "widgets.profile.js"),
        widgetsJS = path.join(tmpDir, "widgets", "widgets.js");

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-dojo');

    // Project configuration.
    grunt.initConfig({
        generate: {
            profile: {
                templates: {
                    profile: grunt.file.read("profile.template.js")
                },
                widgets: grunt.file.readJSON(configFile)
            },
            javascript: {
                widgets: grunt.file.readJSON(configFile)
            }
        },
        dojo: {
            dist: {
                options: {
                    dojo: 'dojo/dojo.js',
                    load: 'build',
                    profile: buildProfile,
                    action: 'release',
                    cwd: './',
                    basePath: '',
                    layerOptimize: "",
                    releaseDir: tmpDir
                }
            }
        },
        copy: {
            main: {
                src: path.join(tmpDir, "dojo", "widgets", "widgets.js"),
                dest: path.join(grunt.option("deploymentDir"),"web", "widgets", "widgets.js")
            },
            nls: {
                expand: true,
                cwd: path.join(tmpDir, "dojo", "widgets", "nls"),
                src: "*",
                dest: path.join(grunt.option("deploymentDir"),"web", "widgets", "nls") + path.sep
            }
        }
    });

    grunt.registerMultiTask("generate", function() {
        var data = this.data;

        console.log(configFile, grunt.file.readJSON(configFile));
        switch (this.target) {
        case "profile":
            var indent = new Array(9).join(" ");
            grunt.file.write(buildProfile, data.templates.profile.replace("${PREFIXES}", function() {
                return data.widgets.map(function(widget) {
                    return widget.split(".")[0];
                }).map(function(prefix) {
                    return indent + "[ \"" + prefix + "\", \"" +
                        path.join(grunt.option("deploymentDir"), "web", "widgets", prefix).replace(/\\/g, "\\\\") + "\" ]";
                }).join(",\n") +
                    ", [ \"widgets\", \"" +  path.join(tmpDir, "widgets").replace(/\\/g, "\\\\") + "\" ]\n";
            }));
            break;
        case "javascript":
            var javascriptLines = [ "define([" ];
            javascriptLines.push(data.widgets.map(function(widget) {
                return '"' + widget.replace(/\./g,"/") + '"';
            }).join(",\n"));
            javascriptLines.push("], function() {});");
            grunt.file.write(widgetsJS, javascriptLines.join("\n"));
        }

    });

    grunt.registerTask('default', [ "generate", "dojo", "copy" ]);
};