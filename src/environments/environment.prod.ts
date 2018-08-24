export const environment = {
  production: true,
  url: 'http://sfconnectqa.eastus.cloudapp.azure.com:8268/api/v1/',
  jwt: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vYmFubGluZWEuY29tIiwiYXVkIjoiYTk5Mjg0MDAtMTdkNy00ODYwLThlNDAtNTgwZjVmOWZkNDI0IiwiY2xhaW1zIjpbeyJJc3N1ZXIiOiJMT0NBTCBBVVRIT1JJVFkiLCJPcmlnaW5hbElzc3VlciI6IkxPQ0FMIEFVVEhPUklUWSIsIlByb3BlcnRpZXMiOnt9LCJTdWJqZWN0IjpudWxsLCJUeXBlIjoic3ViIiwiVmFsdWUiOiJhOTkyODQwMC0xN2Q3LTQ4NjAtOGU0MC01ODBmNWY5ZmQ0MjQiLCJWYWx1ZVR5cGUiOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSNzdHJpbmcifSx7Iklzc3VlciI6IkxPQ0FMIEFVVEhPUklUWSIsIk9yaWdpbmFsSXNzdWVyIjoiTE9DQUwgQVVUSE9SSVRZIiwiUHJvcGVydGllcyI6e30sIlN1YmplY3QiOm51bGwsIlR5cGUiOiJqdGkiLCJWYWx1ZSI6ImM0N2Q4M2FmLTAzODQtNDM1Ni1hMmIxLTE3NzY5ZGQwNGNkNiIsIlZhbHVlVHlwZSI6Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hI3N0cmluZyJ9LHsiSXNzdWVyIjoiTE9DQUwgQVVUSE9SSVRZIiwiT3JpZ2luYWxJc3N1ZXIiOiJMT0NBTCBBVVRIT1JJVFkiLCJQcm9wZXJ0aWVzIjp7fSwiU3ViamVjdCI6bnVsbCwiVHlwZSI6ImlhdCIsIlZhbHVlIjoiMTAvMi8yMDE3IDk6MDQ6NTEgUE0iLCJWYWx1ZVR5cGUiOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSNpbnRlZ2VyNjQifV0sIm5vdCI6IlwvRGF0ZSgxNTA2OTc4MjkxMjcwKVwvIiwiZXhwIjoiXC9EYXRlKDE1MDY5ODE4OTEyNzApXC8iLCJBcHBsaWNhdGlvbklkIjoiYTk5Mjg0MDAtMTdkNy00ODYwLThlNDAtNTgwZjVmOWZkNDI0IiwiVG9rZW4iOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpTVXpJMU5pSXNJbmcxZENJNklraElRbmxMVlMwd1JIRkJjVTFhYURaYVJsQmtNbFpYWVU5MFp5SXNJbXRwWkNJNklraElRbmxMVlMwd1JIRkJjVTFhYURaYVJsQmtNbFpYWVU5MFp5SjkuZXlKaGRXUWlPaUpvZEhSd2N6b3ZMMmR5WVhCb0xuZHBibVJ2ZDNNdWJtVjBMeUlzSW1semN5STZJbWgwZEhCek9pOHZjM1J6TG5kcGJtUnZkM011Ym1WMEx6bGlaVEprWXpRekxXRTVZekF0TkRFeE1TMWlOVEJpTFdFNVkyUTJOMkZrTVRFNE1TOGlMQ0pwWVhRaU9qRTFNRFk1TnpVNU56QXNJbTVpWmlJNk1UVXdOamszTlRrM01Dd2laWGh3SWpveE5UQTJPVGM1T0Rjd0xDSmhhVzhpT2lKWk1sWm5XVXBwY0UxclIwMHdNRnBYWm5NeWNqWm1lbTVVUTB0aVFWRTlQU0lzSW1Gd2NHbGtJam9pWVRrNU1qZzBNREF0TVRka055MDBPRFl3TFRobE5EQXROVGd3WmpWbU9XWmtOREkwSWl3aVlYQndhV1JoWTNJaU9pSXhJaXdpWlY5bGVIQWlPakkyTWpnd01Dd2lhV1J3SWpvaWFIUjBjSE02THk5emRITXVkMmx1Wkc5M2N5NXVaWFF2T1dKbE1tUmpORE10WVRsak1DMDBNVEV4TFdJMU1HSXRZVGxqWkRZM1lXUXhNVGd4THlJc0ltOXBaQ0k2SW1SbE5HSTRaV0l6TFRjeU9USXROREk1TmkxaU5HRTVMVFl4WmpWbFptWmpZVFEzTXlJc0luTjFZaUk2SW1SbE5HSTRaV0l6TFRjeU9USXROREk1TmkxaU5HRTVMVFl4WmpWbFptWmpZVFEzTXlJc0luUmxibUZ1ZEY5eVpXZHBiMjVmYzJOdmNHVWlPaUpPUVNJc0luUnBaQ0k2SWpsaVpUSmtZelF6TFdFNVl6QXROREV4TVMxaU5UQmlMV0U1WTJRMk4yRmtNVEU0TVNJc0luVjBhU0k2SWtKa2VXMXNhalkzZDJ0SFIwRjRjM0ZIU3pCV1FVRWlMQ0oyWlhJaU9pSXhMakFpZlEuSndWcnZtRzFpUG9zeUp2aGNtdkdEZFRwVzFZNGVGY2lSNmZYQUEyMjQtWllEYWc5Q3BjclJ3ejQ3OVpGQThYRlRxUGF3aTFZS2gtbnRpSTVQVnlUYVJmM29IbjVqTlRVNTNoZVdSUERhSkREVGlQMEh1Y2RGTzNkUFJWTTVQbHNLbnYwczFwWk84Z19NX1RLazI2dHdOd3FJYm9yZWJDSmxDVy1DMUlqSFlvc1Z2YTZpRDhNMlNSTDVDWmtFbHFYdjhLQTljUVEyWW5QUjlPMko0aE9yeFpQWmVRVS1JZGRjZWJCUm1SQ1pQdTdfdGNZdFdPTXRWZy04Y1ZPZlZKTVhHQUViellPeU1RUi1pY0liYk1kOWlSZzE5RVk2ZnFlSjVOMmxQSVdZNGxNcVRSckVfODN2ejJuTmhKampVZXJpSjU3cXN1VlhNTnMzemZ6cVVSZVhRIn0.t9PugABl6UjMkbvLSH0kJrqxHjJpqo0_XpaCF2BlmKQ'
};
