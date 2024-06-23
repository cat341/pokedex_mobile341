var dex_screen, dex_components_group;
var bulba_sprite, bulba_image, bulba_shiny_sprite, bulba_value;
var char_sprite, char_image, char_shiny_sprite, char_value;
var squi_sprite, squi_image, squi_shiny_image, squi_value;
var wall1, wall2;
var input_dex;
var SON;

function preload()
{
    bulba_sprite = loadImage("WnES.gif");
    bulba_shiny_sprite = loadImage("shiny bulbassaur.gif");
    char_sprite = loadImage("charmander.png");
    char_shiny_sprite = loadImage("charmander_shiny.gif");
    squi_sprite = loadImage("squirtle_img.webp");
    squi_shiny_image = loadImage("squirtle_shiny.webp");
}

function setup()
{
    createCanvas(400,400);
    wall2 = createSprite(200,50,400,25);
    wall2.shapeColor = ("red");
    SON = Math.round(random(1,4096));
    input_dex = createInput("", "text");
    input_dex.position(10, 110);
    bulba_image = createSprite(100,180,25,25);
    bulba_image.scale = 0.3;
    char_image = createSprite(100,180,25,25);
    char_image.scale = 0.3;
    char_image.visible = false;
    squi_image = createSprite(100,180,25,25);
    squi_image.scale = 0.5;
    squi_image.visible = false;
}
function draw()
{
    background("white");
    drawSprites();
    text("enter dex number", 20, 100);
    if (Number(input_dex.value()) === 1) 
    {
        bulbasaur_SON();
        bulba_image.visible = true;
    }
    else
    {
        bulba_image.visible = false;
    }
    if(Number(input_dex.value()) === 4)
    {
        charmander_SON();
        char_image.visible = true;
    }
    else
    {
        char_image.visible = false;
    }
    if(Number(input_dex.value()) === 7)
    {
        squirtle_SON();
        squi_image.visible = true;
    }
    else
    {
        squi_image.visible = false;
    }
}
function bulbasaur_SON()
{
    bulba_value = Math.round(random(1,4096));
    bulba_image.visible = false;
    if(bulba_value === SON)
    {
        bulba_image.addImage(bulba_shiny_sprite);
    }
    else
    {
        bulba_image.addImage(bulba_sprite);
    }
}
function charmander_SON(){
    char_value = Math.round(random(1,4096));
    if(char_value === SON)
    {
        char_image.addImage(char_shiny_sprite);
    }
    else
    {
        char_image.addImage(char_sprite);
    }
}
function squirtle_SON()
{
    squi_value = Math.round(random(1,4096))
    if(squi_value === SON)
    {
        squi_image.addImage(squi_shiny_image);
    }
    else
    {
        squi_image.addImage(squi_sprite)
    }
}