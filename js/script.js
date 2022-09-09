//form//

const form = document.querySelector('.form');
const telSelector = form.querySelector("input[type='tel']");
const InputMask = new Inputmask("+7 (999) 999-99-99");
InputMask.mask(telSelector);


new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#FF5C00',
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Поле должно содержать не менее 3 символов',
      maxLength: 'Поле должно содержать не более 15 символов'
    },

    tel: {
      required: 'Вы не ввели телефон',
      function: 'Пожалуйста, введите корректный номер телефона'
    },

    email: {
      email: 'Пожалуйста, введите корректный e-mail',
      required: 'Вы не ввели e-mail'
    }
  },

  submitHandler: function(thisForm) {

  }
})


//select//

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,

}

  );

//map//

ymaps.ready(init);
    function init(){

        var myMap = new ymaps.Map("map", {

            center: [48.872185, 2.354224],

            zoom: 14
        });

var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
  iconLayout: 'default#image',
  iconImageHref: 'map.svg',
  iconImageSize: [28, 40],
  iconImageOffset: [-3, -42]
});

myMap.geoObjects.add(myPlacemark);

    }
















