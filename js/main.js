/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n    const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n    const activeClass = 'ativo';\r\n    \r\n    if(accordionList.length) {\r\n      accordionList[0].classList.add(activeClass);\r\n      accordionList[0].nextElementSibling.classList.add(activeClass);\r\n  \r\n      function activeAccordion() {\r\n        this.classList.toggle(activeClass);\r\n        this.nextElementSibling.classList.toggle(activeClass);\r\n      }\r\n  \r\n      accordionList.forEach((item) => {\r\n        item.addEventListener('click', activeAccordion);\r\n      });\r\n    }\r\n  }\n\n//# sourceURL=webpack://eslint/./js/modules/accordion.js?\n}");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros(){\r\n    const numeros = document.querySelectorAll('[data-numero]')\r\n    \r\n    function animaNumeros(){\r\n        numeros.forEach(numero => {\r\n            const total = +numero.innerText\r\n            const incremento = Math.round(total / 100);\r\n            let start = 0\r\n            const timer = setInterval(() => {\r\n                start = start + incremento;\r\n                numero.innerText = start\r\n                if (start > total){\r\n                    numero.innerText = total;\r\n                    clearInterval(timer);\r\n                }\r\n            }, 25)\r\n        })\r\n    }\r\n    \r\n    function handleMutation(mutation){\r\n        if(mutation[0].target.classList.contains('ativo')){\r\n            observer.disconnect()\r\n            animaNumeros()\r\n        }\r\n    }\r\n    \r\n    const observerTarget = document.querySelector('.numeros')\r\n    const observer = new MutationObserver(handleMutation)\r\n    \r\n    observer.observe(observerTarget, {attributes: true})\r\n}\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/anima-numeros.js?\n}");

/***/ }),

/***/ "./js/modules/animacao-scrroll.js":
/*!****************************************!*\
  !*** ./js/modules/animacao-scrroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = (sectionTop - windowMetade) < 0;\n      if (isSectionVisible)\n        section.classList.add('ativo');\n      else if (section.classList.contains('ativo'))\n        section.classList.remove('ativo');\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n    const windowMetade = window.innerHeight * 0.6;\n\n\n    animaScroll();\n\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://eslint/./js/modules/animacao-scrroll.js?\n}");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n    const dropDowns = document.querySelectorAll('[data-dropdown]');\r\n    const userEvents = ['click', 'touchstart'];\r\n    \r\n    dropDowns.forEach((element) => {\r\n        userEvents.forEach((userEvent) => {\r\n            element.addEventListener(userEvent, handleClick);\r\n        });\r\n    });\r\n    \r\n    function handleClick(event){\r\n        event.preventDefault();\r\n        this.classList.add('active');\r\n        (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, userEvents, () => {\r\n            this.classList.remove('active');\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/dropdown-menu.js?\n}");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais(){\r\n    \r\n    const url = './animaisapi.json';\r\n    fetchAnimais(url);\r\n    \r\n    async function fetchAnimais(url){\r\n        try{\r\n            const animaisJson = await (await fetch(url)).json();\r\n            const gridNumeros = document.querySelector('.grid-numeros');\r\n            animaisJson.forEach(animal => {\r\n                const novoAnimal = createAnimal(animal);\r\n                gridNumeros.appendChild(novoAnimal)\r\n            });\r\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        } catch (erro){\r\n            console.log(erro)\r\n        }\r\n    }\r\n    \r\n    function createAnimal(animal){\r\n        const div = document.createElement('div');\r\n        div.classList.add('numero-animal')\r\n        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n        return div;\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/fetch-animais.js?\n}");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc(){\r\n\r\n    fetch('https://blockchain.info/ticker')\r\n    .then(response => response.json())\r\n    .then(bitcoin => {\r\n        const btcPreco = document.querySelector('.doacao')\r\n        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\r\n    })\r\n    .catch(erro => {\r\n        console.log(erro);\r\n    });\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/fetch-bitcoin.js?\n}");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n    const funcionamento = document.querySelector('[data-semana]')\r\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n    const horarios = funcionamento.dataset.horario.split(',').map(Number)\r\n    \r\n    const dataAgora = new Date();\r\n    \r\n    const diaAgora = dataAgora.getDate();\r\n    const horaAgora = dataAgora.getHours();\r\n    \r\n    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n    \r\n    const horarioAberto = horaAgora >= horarios[0] && horaAgora < horarios[1] ? true : false\r\n    \r\n    if(semanaAberto && horarioAberto){\r\n        funcionamento.classList.add('aberto')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/funcionamento.js?\n}");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\nfunction initMenuMobile(){\r\n\r\n}\r\n\r\nconst menuButton = document.querySelector(\"[data-menu='button']\")\r\nconst menuList = document.querySelector(\"[data-menu='list']\")\r\nconst eventos = ['click', 'touchstart']\r\n\r\nif(menuButton){\r\n    function openMenu(event){\r\n        menuButton.classList.toggle('active')\r\n        menuList.classList.toggle('active')\r\n        ;(0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n            menuButton.classList.remove('active')\r\n            menuList.classList.remove('active')\r\n        })\r\n    }\r\n    \r\n    eventos.forEach(userEvent => {\r\n        menuButton.addEventListener(userEvent, openMenu)\r\n    })\r\n}\n\n//# sourceURL=webpack://eslint/./js/modules/menu-mobile.js?\n}");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal(){\r\n    const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]')\r\n    const botaoFechar = document.querySelector('[data-modal=\"fechar\"]')\r\n    const containerModal = document.querySelector('[data-modal=\"container\"]')\r\n    \r\n    if (botaoAbrir && botaoFechar && containerModal){\r\n        function toggleModal(event){\r\n            event.preventDefault();\r\n            containerModal.classList.toggle('ativo')\r\n        }\r\n        \r\n        function cliqueForaModal(event){\r\n            if (event.target === this){\r\n                fecharModal(event)\r\n            }\r\n        }\r\n        \r\n        botaoAbrir.addEventListener('click', toggleModal);\r\n        containerModal.addEventListener('click', cliqueForaModal)\r\n        botaoFechar.addEventListener('click', toggleModal);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/modal.js?\n}");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, events, callback){\r\n    const html = document.documentElement\r\n    const outside = 'data-outside'\r\n    if (!element.hasAttribute(outside)){\r\n        events.forEach((userEvent) => {\r\n            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))\r\n        })\r\n        element.setAttribute(outside, '')\r\n    }\r\n    function handleOutsideClick(event){\r\n        if(!element.contains(event.target)){\r\n            element.removeAttribute(outside)\r\n            events.forEach(userEvent => {\r\n                html.removeEventListener(userEvent, handleOutsideClick)\r\n            })\r\n            callback()\r\n        }\r\n    }   \r\n}\n\n//# sourceURL=webpack://eslint/./js/modules/outside-click.js?\n}");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n    const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\r\n  \r\n    function scrollToSection(event) {\r\n      event.preventDefault();\r\n      const href = event.currentTarget.getAttribute('href');\r\n      const section = document.querySelector(href);\r\n      section.scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start',\r\n      });\r\n  \r\n      // forma alternativa\r\n      // const topo = section.offsetTop;\r\n      // window.scrollTo({\r\n      //   top: topo,\r\n      //   behavior: 'smooth',\r\n      // });\r\n    }\r\n  \r\n    linksInternos.forEach((link) => {\r\n      link.addEventListener('click', scrollToSection);\r\n    });\r\n  }\n\n//# sourceURL=webpack://eslint/./js/modules/scroll-suave.js?\n}");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n  \r\n    if(tabMenu.length && tabContent.length) {\r\n      tabContent[0].classList.add('ativo');\r\n  \r\n      function activeTab(index) {\r\n        tabContent.forEach((section) => {\r\n          section.classList.remove('ativo');\r\n        });\r\n        const direcao = tabContent[index].dataset.anime;\r\n        tabContent[index].classList.add('ativo', direcao);\r\n      }\r\n  \r\n      tabMenu.forEach((itemMenu, index) => {\r\n        itemMenu.addEventListener('click', () => {\r\n          activeTab(index);\r\n        });\r\n      });\r\n    }\r\n  }\r\n  initTabNav();\n\n//# sourceURL=webpack://eslint/./js/modules/tabnav.js?\n}");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip(){\r\n    const tooltips = document.querySelectorAll('[data-tooltip]')\r\n    \r\n    tooltips.forEach((item) => {\r\n        item.addEventListener(\"mouseover\", onMouseOver)\r\n    })\r\n    \r\n    function onMouseOver(event){\r\n        const tooltipBox = makeToolTip(this)\r\n        tooltipBox.style.top = event.pageY + \"px\";\r\n        tooltipBox.style.left = event.pageX + \"px\";\r\n    \r\n        onMouseLeave.tooltipBox = tooltipBox\r\n        onMouseLeave.element = this\r\n    \r\n        onMouseMove.tooltipBox = tooltipBox\r\n    \r\n        this.addEventListener('mouseleave', onMouseLeave)\r\n        this.addEventListener('mousemove', onMouseMove)\r\n    }\r\n    \r\n    const onMouseLeave = {\r\n        handleEvent(){\r\n            this.tooltipBox.remove();\r\n            this.element.removeEventListener('mouseleave', onMouseLeave)\r\n            this.element.removeEventListener('mousemove', onMouseMove)\r\n        }\r\n    }\r\n    \r\n    const onMouseMove = {\r\n        handleEvent(event){\r\n            this.tooltipBox.style.top = event.pageY + 20 + \"px\";\r\n            this.tooltipBox.style.left = event.pageX + 20 +\"px\";\r\n        }\r\n    }\r\n    \r\n    function makeToolTip(element){\r\n        const tooltipBox = document.createElement('div')\r\n        const text = element.getAttribute('aria-label')\r\n        tooltipBox.classList.add('tooltip')\r\n        tooltipBox.innerText = text\r\n        document.body.appendChild(tooltipBox)\r\n        return tooltipBox\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://eslint/./js/modules/tooltip.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animacao_scrroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacao-scrroll.js */ \"./js/modules/animacao-scrroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n// modo de importação quando existe ao menos uma exportação com default\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_animacao_scrroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://eslint/./js/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;