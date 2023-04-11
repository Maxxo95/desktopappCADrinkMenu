
let cocktailsMenu = [
    {
        name: 'Pornstar Martini',
        description: 'Absolut Vanilla vodka shaken  with Passoa passion fruit liqueur, pineapple juice, a dash of lime and passionfruit puree. Garnished with passionfruit and accompanied with a shot of chilled prosecco.',
        ingredients: [
            ["limeJ", 12.5],
            ["vanillaVodka", 35.5],
            ["passoa", 20],
            ["pineappleJuice", 70],
            ["passionFruitPure", 25],
            ["vanillaSyroup", 3]
        ],
        glass: 'coupe',
        method: ['shake', 'doubleStrain'],
        garnish: ['prosecoShot', 'passionFruit'],
        ice: 'chill',
        image: "https://th.bing.com/th/id/OIP.R2f1ekQ-sidTajtPINvAUQHaD4?pid=ImgDet&rs=1g"
    },
    {
        name: 'Raspberry Tom Collins',
        description: 'Drumshanbo Gunpowder Irish Gin served long over crushed ice with fresh raspberries, raspberry puree,lemon juice, sugar to balance and topped with Thomas Henry soda.',
        ingredients: [
            ["lemonJ", 20],
            ["gunPowder", 50],
            ["raspPure", 20],
            ["sugarSyroup", 12.5],
            ["topSoda", 1]

        ],
        glass: 'collins',
        method: ['shake', 'strain'],
        garnish: ['rasp', 'mintSprig', 'crushed ice on top'],
        ice: 'cubed',
        image: "collins.jpg"
    },
    {
        name: 'Passion Punch',
        description: 'Black Tears Cuban spiced rum shaken with passionfruit puree, lime, pineapple and bitters. Served long and topped with Thomas Henry Pink Grapefruit soda. Garnished with pineapple leaf and passionfruit.',
        ingredients: [
            ["limeJ", 25],
            ["blackTears", 50],
            ["passionFruitPure", 25],
            ["sugarSyroup", 12.5],
            ["pineappleJuice", 50],
            ["angosturaBitDash", 3],
            ["topGrape", 1]

        ],
        glass: 'tiki',
        method: ['shake', 'strain'],
        garnish: ['grapeFruit', 'mintSprig', 'crushed ice on top'],
        ice: 'cubed',
        image: "passion.jpg"
    },
    {
        name: 'Oasis Delight',
        description: 'This great cocktail consists of Lime Vodka, Blue Curacao, Mango and passionfruit puree shaken over ice and topped with soda.,  ingredients',
        ingredients: [
            ["limeJ", 25],
            ["limeVodka", 35.5],
            ["blueCuracao", 25],
            ["passionFruitPure", 12.5],
            ["MangoPure", 12.5],
            ["sugarSyroup", 12.5],
            ["topSoda", 1]

        ],
        glass: 'gin',
        method: ['shake', 'strain'],
        garnish: ['lime', 'mintSprig', 'crush ice on top'],
        ice: 'cubed',
        image: "oasis.jpg"
    },
    {
        name: 'Magic Rose',
        description: 'Created by our very own bartender Bogdan, this classic pink woodfire cocktail consists of Absolut Vanilla Vodka & Tequila Rose, Grenadine and lemon juice. Shaken with coconut and served over ice.',
        ingredients: [
            ["lemonJ", 20],
            ["vanillaVodka", 35.5],
            ["tequilaRose", 25],
            ["granadine", 20],
            ["coconutPure", 5],
            ["pineappleJuice", 60]

        ],
        glass: 'gin',
        method: ['shake', 'strain'],
        garnish: ['strawBerry', 'mintSprig', 'crush ice on top'],
        ice: 'cubed',
        image: "rose.jpg"
    },
    {
        name: 'Espresso Martini',
        description: 'First created by world famous bartender Dick Bradsell at Freds Club in London in the 80’s. Vanilla vodka, freshly brewed espresso & coffee liqueur are shaken and strained into a chilled coupette and garnished with coffee beans. ',
        ingredients: [
            ["vanillaVodka", 40],
            ["coffeliqueur", 25],
            ["expressoShot", 3],
            ["vanillaSyroup", 10]


        ],
        glass: 'coupe',
        method: ['shake', 'doubleStrain'],
        garnish: ['3 coffe beans'],
        ice: 'chill',
        image: ""
    },
    {
        name: 'Cosmopolitan',
        description: 'Immortalised by “Sex and the City” , this cocktail was created in the mid-80s by Cheryl Cook and designed to be “oh so pretty pink”. Absolut Citron Vodka, Triple Sec, lime and cranberry juices shaken and served straight up, garnished with orange oils and flavoured smoke.',
        ingredients: [
            ["limeVodka", 35.5],
            ["contreau", 25],
            ["limeJ", 12.5],
            ["cranberryJuice", 70]
            ["granadine", 5]


        ],
        glass: 'coupe',
        method: ['shake', 'doubleStrain'],
        garnish: ['3 coffe beans'],
        ice: 'chill',
        image: "cosmo.jpg"
    },
    {
        name: 'Cappuccino',
        description: 'A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top. Cream may be used instead of milk. It is typically smaller in volume than a latte',
        ingredients: [
            ["expressoShot", 3],
            ['milk', 250],

        ],
        glass: 'mug',
        method: ['Steam milk', '1/2milk, 1/2foam'],
        garnish: ['chocolate powder'],
        ice: 'none',
        image: "https://bing.com/th?id=OSK.b364679709d8bcf65eaf9095e89c0c0d"
    },
    {
        name: 'Latte',
        description: 'What is the description of hot latte? Made with steamed, frothy milk, blended with our rich, freshly ground and brewed espresso. Our Latte has a layer of foam and is the perfect balance of creamy and smooth to get you goin. Lattes use a ratio of at least 1 shot of espresso to 2 ounces of steamed milk ',
        ingredients: [
            ["expressoShot", 3],
            ['milk', 250],

        ],
        glass: 'latte mug',
        method: ['Steam milk', '3/4milk, 1/4foam'],
        garnish: ['latte art'],
        ice: 'none',
        image: "https://thumbs.dreamstime.com/b/cappuccino-coffee-hot-heart-shape-clear-glass-81397907.jpg"
    }

];
/*STARTS DOM in recepie container we will introduce the content of our cocktails array*/
let recipeContainer = document.getElementById('content');
/*with this for loop we will create containers for each coktail in the array wit the following constroction withn the 'contet; class secction in the html'*/
for (let i = 0; i < cocktailsMenu.length; i++) {

    let cocktail = cocktailsMenu[i]; /*assigning each cocktail with i index */

    let recipeContainer = document.getElementById('content');
    /*HERE THE WAY THE INFO OF THE ARRAY WILL BE PRINTED IN THE HTML CREATING DIVISION TO THEN CCS AND STYLE THE OUTPUT*/
    let html = `  
<div class="cocktails" id='drink-${i}'>
  <div class='drinkConta'>
    <h2>${cocktailsMenu[i].name}</h2>
    <p id='rebel'>${cocktailsMenu[i].description}</p>
  </div>
  <img class="drinkImg" src="${cocktailsMenu[i].image}" alt="${cocktailsMenu[i].name}">
</div>
`;

    recipeContainer.innerHTML += html;


}
/*DROP DOWN FUNCTION SECTION DROPDOWN, scan it all and put it in variables + option as a guide or switch to en or disable the dropdown function */
const dropdowns = document.querySelectorAll('.dropdown');
/*ARROW FUNCTION IN CASE OF MORE DROPDOWN MENUS*/
dropdowns.forEach((dropdown) => {
    const cover = dropdown.querySelector('.cover');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = menu.querySelectorAll('.option');
    /*withn this function another function to evenlisent click in the cover section*/
    cover.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');  /*IF CLICK IT WILL TOGGLE WITH THE PREVIOUS CSS CREATED TWO OPTION OPEN OR CLOSE HIDDE/ ENN*/
        menu.classList.toggle('menu-open');   /*same diferent version of menu open and close*/
    });
    /*HERE THE VARIABLES CARE & MENU HAVE TWO STATES ON & OFF WE COULD SAY BUT WE NEED TO MANAGE THEM*/
    /*function basing on menu full content versions, */
    /*for each option function, */
    options.forEach((option) => {
        option.addEventListener('click', () => {
            caret.classList.remove('caret-rotate'); /*if click removes this option from the html caret variable and lets caret */
            menu.classList.remove('menu-open'); /*removes menu with click */

            options.forEach((option) => { /*finally will loop on the clicks removing and adding */
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


/*pop up function of support button*/
function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function togglePopup1() {
    var popup = document.getElementById("loginpop");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}