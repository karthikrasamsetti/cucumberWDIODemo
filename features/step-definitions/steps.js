const { Given, When, Then } = require( '@wdio/cucumber-framework');
const { expect, $  } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');
const RequestPasswordResetCodePage=require("../pageobjects/requestPasswordResetCode.page.js")
const JsonData=require("../../data/user.json")
require("dotenv").config();
const pages = {
    login: LoginPage
}


Given(/^I am on the login page$/, async() => {
    await LoginPage.open();
});



When(/^I click on forgot password$/, async() => {
	await LoginPage.forgotpassword()
});


When(/^I enter <username>$/, async() => {
    await RequestPasswordResetCodePage.resetpassword(process.env.hrm_username)
});


When(/^I login with <username> and <password>$/, async () => {
    await LoginPage.login(process.env.hrm_username, process.env.hrm_password)
});

When(/^I logout from application$/, async() => {
	await  DashboardPage.logout();
});

When(/^I create user by clicking add in dashboard page$/, async() => {
    await DashboardPage.createUser(JsonData.user.username, JsonData.user.password);
});

When(/^I login with  created <username> and <password>$/, async() => {
	await LoginPage.login(JsonData.user.username, JsonData.user.password);
});


When(/^I edit user$/, async() => {
	await DashboardPage.editUser(JsonData.user.username);
});

When(/^check user is admin$/, async() => {
	await DashboardPage.adminVerify();
});

When(/^I delete user$/, async() => {
	await DashboardPage.deleteUser(JsonData.user.username);
});









