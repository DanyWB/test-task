//---------Проверка браузера на поддержку webp-----------//
export function isWepb(){
  function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
      let className = support ===true ? 'webp' : 'no-webp'; // Если webp поддерживается то <html class = "webp"> в противном случае html class = "no-webp">
      document.documentElement.classList.add(className);
    });
  }
  
  export function Check(){
    alert('Скрипты Подключены!')
  }
 