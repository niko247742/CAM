import $ from "jquery";
import * as config from "../constants/config";

export function get(
  url,
  data,
  fetchObject = "data",
  includeGeneric400Text = true
) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      crossDomain: true,
      dataType: "json",
      data: data,
      type: "GET",
      statusCode: {
        200: data => {
          resolve(data);
        },
        400: data => {
          reject(
            includeGeneric400Text
              ? `There was an error while attempting to fetch the ${fetchObject}. ${
                  data.responseText
                }`
              : data.responseText
          );
        },
        401: () => {
          reject(`You are not authorized to fetch the ${fetchObject}.`);
        },
        403: data => {
          reject(data.responseText);
        },
        406: () => {
          reject(
            `The specified accepted media type is not a valid output type from the server`
          );
        },
        500: function() {
          reject(
            `There was an error while attempting to fetch the ${fetchObject}. If the problem persists, contact support at ${
              config.supportEmail
            }`
          );
        }
      }
    });
  });
}

export function post(url, data, postObject = "data", includeAuth = true) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      crossDomain: true,
      dataType: "json",
      type: "POST",
      data: data,
      statusCode: {
        201: function(data) {
          resolve(data);
        },
        400: function(data) {
          reject(data.responseText);
        },
        401: () => {
          reject(`You are not authorized to fetch the ${postObject}.`);
        },
        403: data => {
          reject(data.responseText);
        },
        404: function(data) {
          reject(data.responseText);
        },
        406: () => {
          reject(
            `The specified accepted media type is not a valid output type from the server`
          );
        },
        409: data => {
          reject(data.responseText);
        },
        500: function() {
          reject(
            `There was an error while attempting to add the ${postObject}. If the problem persists, contact support at ${
              config.supportEmail
            }`
          );
        }
      }
    });
  });
}

export function put(url, data, putObject = "data", includeAuth = true) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      crossDomain: true,
      dataType: "json",
      type: "PUT",
      data: data,
      statusCode: {
        200: function(data) {
          resolve(data);
        },
        204: function() {
          resolve();
        },
        400: function(data) {
          reject(data.responseText);
        },
        401: () => {
          reject(`You are not authorized to update the ${putObject}.`);
        },
        403: data => {
          reject(data.responseText);
        },
        406: () => {
          reject(
            `The specified accepted media type is not a valid output type from the server`
          );
        },
        409: data => {
          reject(data.responseText);
        },
        500: function() {
          reject(
            `There was an error while attempting to update the ${putObject}. If the problem persists, contact support at ${
              config.supportEmail
            }`
          );
        }
      }
    });
  });
}

export function patch(url, data, patchObject = "data", includeAuth = true) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      crossDomain: true,
      dataType: "json",
      type: "PATCH",
      data: data,
      statusCode: {
        200: data => {
          resolve(data);
        },
        204: function() {
          resolve();
        },
        400: function(data) {
          reject(data.responseText);
        },
        401: () => {
          reject(`You are not authorized to update the ${patchObject}.`);
        },
        403: data => {
          reject(data.responseText);
        },
        406: () => {
          reject(
            `The specified accepted media type is not a valid output type from the server`
          );
        },
        409: data => {
          reject(data.responseText);
        },
        500: function() {
          reject(
            `There was an error while attempting to update the ${patchObject}. If the problem persists, contact support at ${
              config.supportEmail
            }`
          );
        }
      }
    });
  });
}

export function callDelete(url, data, deleteObject = "data") {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      crossDomain: true,
      dataType: "json",
      type: "DELETE",
      data: data,
      statusCode: {
        204: function() {
          resolve();
        },
        400: function(data) {
          reject(data.responseText);
        },
        401: () => {
          reject(`You are not authorized to delete the ${deleteObject}.`);
        },
        403: data => {
          reject(data.responseText);
        },
        406: () => {
          reject(
            `The specified accepted media type is not a valid output type from the server`
          );
        },
        500: function() {
          reject(
            `There was an error while attempting to delete the ${deleteObject}. If the problem persists, contact support at ${
              config.supportEmail
            }`
          );
        }
      }
    });
  });
}
