package system;

import aQute.bnd.annotation.component.Component;
import aQute.bnd.annotation.component.Reference;

import com.mendix.core.actionmanagement.IActionRegistrator;

@Component(immediate = true)
public class UserActionsRegistrar
\{
  @Reference
  public void registerActions(IActionRegistrator registrator)
  \{
    registrator.bundleComponentLoaded();
    {JavaActions:registrator.registerUserAction({Name}.class);|
    }
  \}
\}
