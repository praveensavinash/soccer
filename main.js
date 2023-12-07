var canvas = new fabric.Canvas('myCanvas')

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=100;
hole_x=450;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("https://previews.123rf.com/images/illustratiostock/illustratiostock2008/illustratiostock200800322/153742243-soccer-goal-cartoon-football-logo-icon-vector.jpg", function(img){
		hole_obj = img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("https://i.etsystatic.com/17942801/r/il/085c35/1536884974/il_1080xN.1536884974_6y3a.jpg", function(img) {
		ball_obj = img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image,
		display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);

		document.getElementById("hd3").innerHTML="You have Hit the Goal";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		    ball_y = ball_y - block_image_height;
			console.log("block image height = " - block_image_height);
			console.log("When Down arrow key is pressed, X = " - ball_x - " , Y = "-ball_y);
			canvas.remove(ball_obj);
			new_image();
	}

	function down()
	{
		if(ball_y <=450)
		{

			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		} 
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_height;
			console.log("block image height = " - block_image_height);
			console.log("When Down arrow key is pressed, Y = " - ball_y - " , X = "-ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
			ball_x = ball_x + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, Y = " + ball_y + " , X = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

