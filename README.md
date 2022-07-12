# stack-navigation-web-back-forward-bug

This repo demonstrates how to reproduce the back/forward bug on web. 

Steps:
* Click button which navigates to a route with a parameter, `{ id: 123 }`
* Click the browser's back button
* Click the browser's forward button
* Click the browser's back button

At this point the error occurs. It seems the action that is dispatched has an `undefined` payload, which is the source of the error.

_Logging action_
<img width="1624" alt="Screen Shot 2022-07-12 at 11 12 52 AM" src="https://user-images.githubusercontent.com/177652/178564884-b5c34c97-4344-4692-a343-f996b153496c.png">

The reset handler assumes that `nextState` is defined:
<img width="379" alt="Screen Shot 2022-07-12 at 11 13 59 AM" src="https://user-images.githubusercontent.com/177652/178565348-da1893b5-309e-4d2d-b816-539143901b1c.png">


## Demo

![back-forward-issue-demo](https://user-images.githubusercontent.com/177652/178563479-8238cdc0-1c64-4f8b-a332-d23b51e70ed3.gif)
