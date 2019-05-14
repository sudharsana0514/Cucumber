package stepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Cucumber\\Cucumber\\src\\test\\java",tags= {"@sprint1","@sprint1"},dryRun=false,strict=true,monochrome=true,glue="stepDefinition",plugin="html:target")

public class TestRunner {

}
