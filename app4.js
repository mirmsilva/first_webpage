if (catAllergic.toLowerCase() == 'yes' && dogAllergic.toLowerCase() == 'yes'){
    document.write('<h3>Sorry to hear that! no pet for you</h3>');
}else if(catAllergic.toLowerCase() == 'no' && dogAllergic.toLowerCase() == 'yes') {
    document.write('<h3>Great! Get a cat!</h3>');
}else if (catAllergic.toLowerCase() == 'no' && dogAllergic.toLowerCase() == 'no'){
    document.write('<h3>Great! you can get both!</h3>');
}else if(catAllergic.toLowerCase() == 'yes' && dogAllergic.toLowerCase() =='no') {
    document.write('<h3>Great! Get a dog!</h3>');
}
