Feature: The Orangehrm Website

  Scenario: verify forgot your password interface
    Given I am on the login page
    When I click on forgot password

  Scenario: password reset
    Given I am on the login page
    When I click on forgot password
    When I enter <username>

  Scenario: new login functionality
    Given I am on the login page
    When I login with <username> and <password>
    When I logout from application

  Scenario: create user
    Given I am on the login page
    When I login with <username> and <password>
    When I create user by clicking add in dashboard page
    When I logout from application

  
  Scenario: Make user an admin
    Given I am on the login page
    When I login with <username> and <password>
    When I edit user 
    When I logout from application

  
  Scenario: Verify that new user have all permisssions as admin
    Given I am on the login page
    When I login with  created <username> and <password>
    When check user is admin
    When I logout from application

  
  Scenario: delete user
    Given I am on the login page
    When I login with <username> and <password>
    When I delete user
    When I logout from application
      