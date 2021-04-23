function getUserName(){
    let userName = prompt('Please Enter Your Name');
    document.write('<h2>' +'Welcome ' + userName +', Once you enjoy your picture below head over to our why section for help picking a pet!' + '</h2>');
    return userName;
}

function petQuiz(){
    let catPrompt = prompt('Are you allergic to cats?');
    let dogPrompt = prompt('Are you allergic to dogs?');
    if (catPrompt.toLowerCase() == 'yes' && dogPrompt.toLowerCase() == 'yes'){
        document.write('<h3>Sorry to hear that! no pet for you</h3>');
    }else if(catPrompt.toLowerCase() == 'no' && dogPrompt.toLowerCase() == 'yes'){
        document.write('<h3>Great! Get a cat!</h3>');
    }else if (catPrompt.toLowerCase() == 'no' && dogPrompt.toLowerCase() == 'no'){
        document.write('<h3>Great! you can get both!</h3>');
    }else if(catPrompt.toLowerCase() == 'yes' && dogPrompt.toLowerCase() =='no') {
        document.write('<h3>Great! Get a dog!</h3>');
    }
}

function addPictures(){
    numberOfPictures = prompt ('How many pictures do you want to see?');
    url = "http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs-360x270.jpg"
    for(let i = 0; i < numberOfPictures; i ++){
        document.write('<img src="' + url + '">');
    }
}