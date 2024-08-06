document.addEventListener('DOMContentLoaded',postDATA);
console.log(document.location.search);

const data= document.location.search;
const params= new URLSearchParams(data);

const amount= params.get('amount');
const halloween= params.getAll('halloween');
const animal= params.get('animal');
const friday=params.get('friday');
const band=params.get('band')


let characters;
let image;
let desc;

if (halloween.includes("devil") && friday=="wink" || animal=="dog" && band=="keys" || amount== 2 && band=="keys"){
    characters= 'Depeche Mode';
    image='images/depechemode.jpeg';
    desc='You are the coolest of the group. You take whats popular and make it uniquely yours. No one can ever accuse you of not being yourself. You are also probably a fantastic writer.';
    

}else if (halloween.includes("cat") && friday=="call" || animal=="cat" && band=="guitar" || amount== 5 && band=="guitar" ){
    characters= 'The Cure';
    image='images/cure.jpeg';
    desc='You are classy, timeless, and a fan favorite. You do not care what people think of you in the best way possible. Other people look at you in awe. You are quite well known, and sometimes get people copying your style. Thats alright though, they can never be you.';

} else if (halloween.includes("scary") && friday=="music" || animal=="wolf" && band=="drums" || amount== 3 && band=="drums" )
    {characters= 'Bauhaus'
    image='images/bauhaus.jpeg';
    desc='You have probably scared some people, but you do not care, and I respect you for that. You probably go to art school or do something weird as a job. Your favorite color is definitely black, and you are the most goth out of your friends.';

} else if (halloween.includes("undead") && friday=="party" || animal=="bird" && band=="bass" || amount== 4 && band=="bass" )
    {characters= 'Joy Division'
    image='images/joydivision.jpeg';
    desc='You are definitely a skater, or at least a beanie wearer. You have been through some tough times, but you have really got to stop manipulating your significant others. Therapy is a very helpful resource. Don`t let them go all New Order on you. ';

} else if (halloween.includes("normal") && friday=="dinner" || animal=="reptile" && band=="sing" || amount== 0 && band=="sing" )
    {characters= 'Siouxie and the Banshees'
    image='images/siouxie.jpeg';
    desc='You march to the beat of your own drum, and you are super inspirational. You have a great sense of style and sense of yourself. Your confidence is infectious, and people love to be around you. How does it feel being the stable friend?';


} else if (halloween.includes("tv") && friday=="read" || animal=="rabbit" && band=="brass" || amount== 1 && band=="brass" )
    {characters= 'The Smiths'
    image=''; 
    desc='Congrats! You got the most underwhelming one. I mean, the Smiths are okay, I guess, but Robert Smith would demolish Morrisey in a fight instantly, Im just saying. You are self pitying and hyprocritical, but at least you hang out with cool people.';

}else 
    {characters='Pet Shop Boys'
    image='images/psb.jpeg';
    desc='Hey! You outsmarted the quiz, thats not fair! It is actually a pretty big compliment because the Pet Shop Boys are universal. That`s why I made them the catch all. If you don`t like them, I don`t believe you. You have a big group of friends, and you are definitely the funny one. You also will be just as cool when you are 60.';}

    


//writing html code
function postDATA() {const container = document.getElementById('results');
container.innerHTML= `<h1> You are ${characters}!</hl>
                        <img src="${image}"></img>
                        <p>${desc}</p>`
}


