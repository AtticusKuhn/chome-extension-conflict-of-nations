webpackHotUpdate("all",{

/***/ "./src/injected/script.ts":
/*!********************************!*\
  !*** ./src/injected/script.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// import autoRefresh from './autoRefresh';\n\n/*\n    rip I must have every function in 1 file unitll I figure out how to use webpack\n    */\nconst inject = config => {\n  const Mwindow = window;\n\n  if (window.location.href === \"https://www.conflictnations.com/game.php?bust=1\") {\n    return;\n  }\n\n  function autoRefresh(_config) {\n    setInterval(() => {\n      console.log(\"interval checking...\");\n\n      if (!Mwindow.chromeStorage.autoRefresh) {\n        return; // only execute if this setting has been enabled\n      }\n\n      const games_button = document.querySelector(\"#ui_open_new_games\");\n\n      if (!games_button) {\n        return;\n      } //@ts-ignore\n\n\n      games_button.click();\n    }, 1e3); // if(!window.locatio)\n\n    console.log(\"auto refresh function\");\n  }\n\n  function gameFilter() {\n    console.log(\"game filter called\");\n    const proxy = Mwindow.hup.model.games.Game.onSearchGamesLoaded;\n\n    Mwindow.hup.model.games.Game.onSearchGamesLoaded = function () {\n      if (!Mwindow.chromeStorage.filter) {\n        return proxy.apply(this, [].slice.call(arguments));\n      }\n\n      console.log(\"proxy called\"); // if(!Mwindow.chromeStorage.gam)\n\n      let newA = arguments[0];\n      console.log(newA.result.games);\n      const newGames = newA.result.games.filter(game => game.properties.title === Mwindow.chromeStorage.filter.toUpperCase());\n      console.log({\n        newGames\n      });\n      newA.result.games = newGames;\n      const newArguments = [newA, arguments[1]];\n      return proxy.apply(this, [].slice.call(newArguments));\n    };\n  } // const Mwindow /= (window as unknown) as myWindow;\n\n\n  Mwindow.chromeStorage = config;\n  console.log(\"injected\"); // console.log(hup.config.user);\n  // Mwindow.hup = {\n  //     aInternal: {},\n  //     aListener: (val: any) => {},\n  //     set a(val) {\n  //         this.aInternal = val;\n  //         this.aListener(val);\n  //     },\n  //     get a() {\n  //         return this.aInternal;\n  //     },\n  //     registerListener: function (listener: any) {\n  //         this.aListener = listener;\n  //     },\n  // };\n\n  setTimeout(() => {\n    console.log(Mwindow.hup); // this is the good info\n\n    autoRefresh(config);\n    gameFilter(); // eval(`(${autoRefresh.toString()})(${JSON.stringify(config)})`);\n  }, 1000);\n};\n\nconst _default = inject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(inject, \"inject\", \"/home/eulerthedestroyer/Con-Extension/awesome-chrome-extension-boilerplate/src/injected/script.ts\");\n  reactHotLoader.register(_default, \"default\", \"/home/eulerthedestroyer/Con-Extension/awesome-chrome-extension-boilerplate/src/injected/script.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvc2NyaXB0LnRzPzc0MTYiXSwibmFtZXMiOlsiaW5qZWN0IiwiY29uZmlnIiwiTXdpbmRvdyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImF1dG9SZWZyZXNoIiwiX2NvbmZpZyIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImNocm9tZVN0b3JhZ2UiLCJnYW1lc19idXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsImdhbWVGaWx0ZXIiLCJwcm94eSIsImh1cCIsIm1vZGVsIiwiZ2FtZXMiLCJHYW1lIiwib25TZWFyY2hHYW1lc0xvYWRlZCIsImZpbHRlciIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwibmV3QSIsInJlc3VsdCIsIm5ld0dhbWVzIiwiZ2FtZSIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibmV3QXJndW1lbnRzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7QUFHQSxNQUFNQSxNQUFNLEdBQUlDLE1BQUQsSUFBdUI7QUFDbEMsUUFBTUMsT0FBTyxHQUFJQyxNQUFqQjs7QUFFQSxNQUNJQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQ0EsaURBRkosRUFHRTtBQUNFO0FBQ0g7O0FBQ0QsV0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBbUM7QUFDL0JDLGVBQVcsQ0FBQyxNQUFNO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaOztBQUNBLFVBQUksQ0FBQ1IsT0FBTyxDQUFDUyxhQUFSLENBQXNCTCxXQUEzQixFQUF3QztBQUNwQyxlQURvQyxDQUM1QjtBQUNYOztBQUNELFlBQU1NLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUFyQjs7QUFDQSxVQUFJLENBQUNGLFlBQUwsRUFBbUI7QUFDZjtBQUNILE9BUmEsQ0FTZDs7O0FBQ0FBLGtCQUFZLENBQUNHLEtBQWI7QUFDSCxLQVhVLEVBV1IsR0FYUSxDQUFYLENBRCtCLENBYS9COztBQUNBTixXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNIOztBQUNELFdBQVNNLFVBQVQsR0FBc0I7QUFDbEJQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0EsVUFBTU8sS0FBSyxHQUFHZixPQUFPLENBQUNnQixHQUFSLENBQVlDLEtBQVosQ0FBa0JDLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2QkMsbUJBQTNDOztBQUNBcEIsV0FBTyxDQUFDZ0IsR0FBUixDQUFZQyxLQUFaLENBQWtCQyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJDLG1CQUE3QixHQUFtRCxZQUFZO0FBQzNELFVBQUksQ0FBQ3BCLE9BQU8sQ0FBQ1MsYUFBUixDQUFzQlksTUFBM0IsRUFBbUM7QUFDL0IsZUFBT04sS0FBSyxDQUFDTyxLQUFOLENBQVksSUFBWixFQUFrQixHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFsQixDQUFQO0FBQ0g7O0FBQ0RsQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBSjJELENBSzNEOztBQUNBLFVBQUlrQixJQUFJLEdBQUdELFNBQVMsQ0FBQyxDQUFELENBQXBCO0FBQ0FsQixhQUFPLENBQUNDLEdBQVIsQ0FBWWtCLElBQUksQ0FBQ0MsTUFBTCxDQUFZVCxLQUF4QjtBQUNBLFlBQU1VLFFBQVEsR0FBR0YsSUFBSSxDQUFDQyxNQUFMLENBQVlULEtBQVosQ0FBa0JHLE1BQWxCLENBQ1pRLElBQUQsSUFDSUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxLQUFoQixLQUNBL0IsT0FBTyxDQUFDUyxhQUFSLENBQXNCWSxNQUF0QixDQUE2QlcsV0FBN0IsRUFIUyxDQUFqQjtBQUtBekIsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRW9CO0FBQUYsT0FBWjtBQUNBRixVQUFJLENBQUNDLE1BQUwsQ0FBWVQsS0FBWixHQUFvQlUsUUFBcEI7QUFDQSxZQUFNSyxZQUFZLEdBQUcsQ0FBQ1AsSUFBRCxFQUFPRCxTQUFTLENBQUMsQ0FBRCxDQUFoQixDQUFyQjtBQUNBLGFBQU9WLEtBQUssQ0FBQ08sS0FBTixDQUFZLElBQVosRUFBa0IsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNTLFlBQWQsQ0FBbEIsQ0FBUDtBQUNILEtBakJEO0FBa0JILEdBOUNpQyxDQStDbEM7OztBQUNBakMsU0FBTyxDQUFDUyxhQUFSLEdBQXdCVixNQUF4QjtBQUNBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBakRrQyxDQWtEbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBMEIsWUFBVSxDQUFDLE1BQU07QUFDYjNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFPLENBQUNnQixHQUFwQixFQURhLENBQ2E7O0FBQzFCWixlQUFXLENBQUNMLE1BQUQsQ0FBWDtBQUNBZSxjQUFVLEdBSEcsQ0FJYjtBQUNILEdBTFMsRUFLUCxJQUxPLENBQVY7QUFNSCxDQXZFRDs7aUJBd0VlaEIsTTtBQUFBOzs7Ozs7Ozs7OzBCQXhFVEEsTSIsImZpbGUiOiIuL3NyYy9pbmplY3RlZC9zY3JpcHQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBteVdpbmRvdyB9IGZyb20gXCIuLi90eXBlc1wiO1xuLy8gaW1wb3J0IGF1dG9SZWZyZXNoIGZyb20gJy4vYXV0b1JlZnJlc2gnO1xuLypcbiAgICByaXAgSSBtdXN0IGhhdmUgZXZlcnkgZnVuY3Rpb24gaW4gMSBmaWxlIHVuaXRsbCBJIGZpZ3VyZSBvdXQgaG93IHRvIHVzZSB3ZWJwYWNrXG4gICAgKi9cbmNvbnN0IGluamVjdCA9IChjb25maWc6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IE13aW5kb3cgPSAod2luZG93IGFzIHVua25vd24pIGFzIG15V2luZG93O1xuXG4gICAgaWYgKFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT1cbiAgICAgICAgXCJodHRwczovL3d3dy5jb25mbGljdG5hdGlvbnMuY29tL2dhbWUucGhwP2J1c3Q9MVwiXG4gICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXV0b1JlZnJlc2goX2NvbmZpZzogYW55KSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50ZXJ2YWwgY2hlY2tpbmcuLi5cIik7XG4gICAgICAgICAgICBpZiAoIU13aW5kb3cuY2hyb21lU3RvcmFnZS5hdXRvUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gb25seSBleGVjdXRlIGlmIHRoaXMgc2V0dGluZyBoYXMgYmVlbiBlbmFibGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBnYW1lc19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VpX29wZW5fbmV3X2dhbWVzXCIpO1xuICAgICAgICAgICAgaWYgKCFnYW1lc19idXR0b24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGdhbWVzX2J1dHRvbi5jbGljaygpO1xuICAgICAgICB9LCAxZTMpO1xuICAgICAgICAvLyBpZighd2luZG93LmxvY2F0aW8pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXV0byByZWZyZXNoIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnYW1lRmlsdGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWUgZmlsdGVyIGNhbGxlZFwiKTtcbiAgICAgICAgY29uc3QgcHJveHkgPSBNd2luZG93Lmh1cC5tb2RlbC5nYW1lcy5HYW1lLm9uU2VhcmNoR2FtZXNMb2FkZWQ7XG4gICAgICAgIE13aW5kb3cuaHVwLm1vZGVsLmdhbWVzLkdhbWUub25TZWFyY2hHYW1lc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghTXdpbmRvdy5jaHJvbWVTdG9yYWdlLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm94eSBjYWxsZWRcIik7XG4gICAgICAgICAgICAvLyBpZighTXdpbmRvdy5jaHJvbWVTdG9yYWdlLmdhbSlcbiAgICAgICAgICAgIGxldCBuZXdBID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3QS5yZXN1bHQuZ2FtZXMpO1xuICAgICAgICAgICAgY29uc3QgbmV3R2FtZXMgPSBuZXdBLnJlc3VsdC5nYW1lcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGdhbWU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5wcm9wZXJ0aWVzLnRpdGxlID09PVxuICAgICAgICAgICAgICAgICAgICBNd2luZG93LmNocm9tZVN0b3JhZ2UuZmlsdGVyLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IG5ld0dhbWVzIH0pO1xuICAgICAgICAgICAgbmV3QS5yZXN1bHQuZ2FtZXMgPSBuZXdHYW1lcztcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyZ3VtZW50cyA9IFtuZXdBLCBhcmd1bWVudHNbMV1dO1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwobmV3QXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGNvbnN0IE13aW5kb3cgLz0gKHdpbmRvdyBhcyB1bmtub3duKSBhcyBteVdpbmRvdztcbiAgICBNd2luZG93LmNocm9tZVN0b3JhZ2UgPSBjb25maWc7XG4gICAgY29uc29sZS5sb2coXCJpbmplY3RlZFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhodXAuY29uZmlnLnVzZXIpO1xuICAgIC8vIE13aW5kb3cuaHVwID0ge1xuICAgIC8vICAgICBhSW50ZXJuYWw6IHt9LFxuICAgIC8vICAgICBhTGlzdGVuZXI6ICh2YWw6IGFueSkgPT4ge30sXG4gICAgLy8gICAgIHNldCBhKHZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy5hSW50ZXJuYWwgPSB2YWw7XG4gICAgLy8gICAgICAgICB0aGlzLmFMaXN0ZW5lcih2YWwpO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBnZXQgYSgpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmFJbnRlcm5hbDtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgcmVnaXN0ZXJMaXN0ZW5lcjogZnVuY3Rpb24gKGxpc3RlbmVyOiBhbnkpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gfTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coTXdpbmRvdy5odXApOyAvLyB0aGlzIGlzIHRoZSBnb29kIGluZm9cbiAgICAgICAgYXV0b1JlZnJlc2goY29uZmlnKTtcbiAgICAgICAgZ2FtZUZpbHRlcigpO1xuICAgICAgICAvLyBldmFsKGAoJHthdXRvUmVmcmVzaC50b1N0cmluZygpfSkoJHtKU09OLnN0cmluZ2lmeShjb25maWcpfSlgKTtcbiAgICB9LCAxMDAwKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/injected/script.ts\n");

/***/ })

})