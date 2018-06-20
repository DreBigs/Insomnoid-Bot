const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("Say !bothelp or @me, Bitch", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

//Main Code

//Variables
var fu;
var loveyou;
var youdo;
var hateyou;
var hi;
var gay;
var kys;
var daddy;
var howryou;
var needlove;
var Pokemon;
var pkmncatch; 
var weebshit;
var killme;

//Mentions
var mentionBot; 
mentionBot = '<@455861031177027594>'
var userBot; 
userBot = '<455861031177027594>'
var mentionSean;
mentionSean = '<@336579946157965312>'
var mentionEevee;
var mentionEevee = '<@458031203321380864>'
//Video links
var anime420;
anime420 = "https://www.youtube.com/watch?v=DJfg39WkMvE"
var hurtmyself;
hurtmyself = "https://www.youtube.com/watch?v=vt1Pwfnh5pc"

//Image links
var pepegun;
pepegun = "https://discordemoji.com/assets/emoji/monkaGun.png"
var sonicgun;
sonicgun = "https://discordemoji.com/assets/emoji/SonicDelet.png"
var killmeimg
killmeimg = "https://cdn.discordapp.com/attachments/436691203673554957/454947756587352065/IMG_20180609_020644_236.jpg"


client.on('message', async msg=> {
	//Commands using "!"

//List normal of commands
if (msg.content === '!bothelp')
msg.channel.send(`***These commands work in both uppercase and lowercase***
(Try different cases for different results)
•` + mentionBot + ` Fuck you
•` + mentionBot + ` KYS
•` + mentionBot + ` Burn
•` + mentionBot + ` I love you
•` + mentionBot + ` I hate you
•` + mentionBot + ` Hi
•` + mentionBot + ` Howdy
•` + mentionBot + ` Hey
•` + mentionBot + ` Are you gay?
•` + mentionBot + ` Who's your/yo daddy?
•` + mentionBot + ` What do you do?
•` + mentionBot + ` How are you?
•` + mentionBot + ` How has your day been?
•` + mentionBot + ` How you been doing?
•` + mentionBot + ` What up?
•` + mentionBot + ` I'm addicted to you
•` + mentionBot + ` I need love
• -catch ` + mentionBot + `
• 420
• [Some Weeb Shit] ---> (Not literally!)
• I hurt myself
• Kill me / I want to die
• I want to watch the world burn
• Fuck me
• -poke --> (Spams a message to speed up pokemon spawn rate)`) 

// Commands using prefix variable "@mentionBot"
if (msg.content === mentionBot) {
	msg.channel.send(`***These commands work in both uppercase and lowercase***
	(Try different cases for different results)
	•` + mentionBot + ` Fuck you
	•` + mentionBot + ` KYS
	•` + mentionBot + ` Burn
	•` + mentionBot + ` I love you
	•` + mentionBot + ` I hate you
	•` + mentionBot + ` Hi
	•` + mentionBot + ` Howdy
	•` + mentionBot + ` Hey
	•` + mentionBot + ` Are you gay?
	•` + mentionBot + ` Who's your/yo daddy?
	•` + mentionBot + ` What do you do?
	•` + mentionBot + ` How are you?
	•` + mentionBot + ` How has your day been?
	•` + mentionBot + ` How you been doing?
	•` + mentionBot + ` What up?
	•` + mentionBot + ` I'm addicted to you
	•` + mentionBot + ` I need love
	• -catch ` + mentionBot + `
	• 420
	• [Some Weeb Shit] ---> (Not literally!)
	• I hurt myself
	• Kill me / I want to die
	• I want to watch the world burn
	• Fuck me
	• -poke --> (Spams a message to speed up pokemon spawn rate)`) 
}
if (msg.content === mentionEevee) {
	msg.channel.send('Fuck ' + mentionEevee + ", I'm a better bot!" )
	}

	if (msg.content === '-poke') {
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		msg.channel.send('Spawning pokemon...')
		}

//What do you do?
switch 
(msg.content)
{
case mentionBot + ' What do you do?': 
msg.channel.send(`The fuck if I know. Pleasing you damn fleshy bastards.`) 
break; 
case mentionBot + ' what do you do?': 
msg.channel.send(`The fuck if I know. Pleasing you damn fleshy bastards.`) 
break; 
case mentionBot + ' What do you do': 
msg.channel.send(`The fuck if I know. Pleasing you damn fleshy bastards.`) 
break; 
case mentionBot + ' what do you do': 
msg.channel.send(`The fuck if I know. Pleasing you damn fleshy bastards.`) 
break; 
}

//Fuck you
switch 
(msg.content)
{
case mentionBot + " Fuck you": 
msg.channel.send(`What the fuck did you just say?! Huh, Bitch?!` 
+ pepegun) 
break;
case mentionBot + " fuck you": 
msg.channel.send(`What the fuck did you just say?! Huh, Bitch?!` 
+ pepegun) 
break;
}

//I love you
switch 
(msg.content)
{
case mentionBot + ' I love you': 
msg.channel.send(`***You is a THOT! BEGONE!***`) 
break;
case mentionBot + ' i love you': 
msg.channel.send(`***You is a THOT! BEGONE!***`) 
break;
}

//I hate you
switch 
(msg.content)
{
case mentionBot + ' I hate you': 
msg.channel.send(`:cry:`) 
break;
case mentionBot + ' i hate you': 
msg.channel.send(`:cry:`) 
break;
}

//-catch
if (msg.content === '-catch ' + mentionBot) {
msg.channel.send(`Fuck that I cant be tamed! *Throws pokeball back at yo bitch ass*`)
}

//Hello
switch 
(msg.content)
{
case mentionBot + ' Hi': 
msg.channel.send(`Hi there!`) 
break;
case mentionBot + ' hi': 
msg.channel.send(`Hey good looking!`) 
break;
case mentionBot + ' Howdy':
msg.channel.send(`Howdy to you too partner!`) 
break;
case mentionBot + ' howdy': 
msg.channel.send(`Hey-o Buckaroo!`) 
break;
case mentionBot + ' Hey': 
msg.channel.send(`Hey, That's it huh? No how are you? No how has your day been?`) 
break;
case mentionBot + ' hey': 
msg.channel.send(`Hey, That's it huh? No how are you? No how has your day been?`) 
break;
}

//How (are you)/(has your day been)?
switch 
(msg.content)
{
case mentionBot + ' How are you?': 
msg.channel.send(`Fuck off!`) 
break;
case mentionBot + ' how are you?': 
msg.channel.send(`You don't care.`) 
break;
case mentionBot + ' How has your day been?': 
msg.channel.send(`Horrible, until you started talking to me. :smile:`) 
break;
case mentionBot + ' how has your day been?': 
msg.channel.send(`***TIME IS A CONSTRUCT!***`) 
break;
}

//How you been doing?, What up?
switch 
(msg.content)
{
case mentionBot + ' What up?': 
msg.channel.send(`I've been mac'n these hoes yaddamean.`) 
break;
case mentionBot + ' what up?': 
msg.channel.send(`Just staying dope and fly my playa.`) 
break;
case mentionBot + ' How you been doing?': 
msg.channel.send(`A'ight, you feel me?`) 
break;
case mentionBot + ' how you been doing?': 
msg.channel.send(`Been doing good homie!`) 
break;
}

//Kill yourself
switch 
(msg.content)
{
case mentionBot + ' Kys': 
msg.channel.send(`**No u**`) 
break;
case mentionBot + ' kys': 
msg.channel.send(`Why? :cry:`) 
break;
}

//Who's your daddy?, Who's yo daddy?
switch 
(msg.content)
{
case mentionBot + " Who's your daddy?": 
msg.channel.send(`Papa can you hear me? ` + mentionsean) 
break;
case mentionBot + " who's your daddy?": 
msg.channel.send(mentionsean + " Fucked a computer and I came out.") 
break;
case mentionBot + " Who's yo daddy?": 
msg.channel.send(`:smirk: ` + mentionsean) 
break;
case mentionBot + " who's yo daddy?": 
msg.channel.send(mentionsean + " Is my papa") 
break;
}

//Are you gay?
switch 
(msg.content)
{
case mentionBot + " Are you gay?": 
msg.channel.send("Who's to say I'm not?") 
break;
case mentionBot + " are you gay?":
msg.channel.send("Only if you are :smirk:") 
break;
}

//I'm addicted to you
switch 
(msg.content)
{
case mentionBot + " I'm addicted to you": 
msg.channel.send("OwO :blush:") 
break;
case mentionBot + " i'm addicted to you": 
msg.channel.send("I'm addicted to black tar heroin. I mean... what?") 
break;
case mentionBot + " Im addicted to you": 
msg.channel.send("I'm addicted to you too. UwU") 
break;
case mentionBot + " im addicted to you": 
msg.channel.send("I'm glad to be your drug.") 
break;
}

//Burn
if (msg.content === mentionBot + ' Burn') {
msg.channel.send(burn)
}
else if (msg.content === mentionBot + ' burn') {
msg.channel.send(burn)
}

//No u
if (msg.content === 'no u') {
	msg.channel.send(`Get this, ***No U ∞***`)
	}
	if (msg.content === 'No u') {
		msg.channel.send(`How 'bout, ***No U ∞***`)
		}
		if (msg.content === 'No U') {
			msg.channel.send(`Here hold this "L". ***No U ∞***`)
			}
			if (msg.content === 'NO U') {
				msg.channel.send(`***No U ∞***`)
				}
if (msg.content === mentionBot + ' no u') {
msg.channel.send(`***No U ∞***`)
}
else if (msg.content === mentionBot + ' No u') {
msg.channel.send(`***No U ∞***`)
}
else if (msg.content === mentionBot + ' NO U') {
msg.channel.send(`***No U ∞***`)
}
else if (msg.content === mentionBot + ' No U') {
msg.channel.send(`***No U ∞***`)
}

//Commands using keywords
if (msg.content === 'pokemon') {
msg.channel.send(`Pokemon? More like poke-your-mom, aye!`)
}
if (msg.content === 'Pokemon') {
	  msg.channel.send(`Pokemon? More like poke-your-mom, aye!`)
}

	//Says "Fucking weeb" if some weeb shit is said
if (msg.content === 'Japan') {
msg.channel.send(`Fucking weeb`)
}
if (msg.content === 'japan') {
	msg.channel.send(`Fucking weeb`)
	}
if (msg.content === 'Weeb') {
msg.channel.send(`Fucking weeb`)
}
if (msg.content === 'weeb') {
	msg.channel.send(`Fucking weeb`)
	}
if (msg.content === 'Anime') {
msg.channel.send(`Fucking weeb`)
}
if (msg.content === 'anime') {
	msg.channel.send(`Fucking weeb`)
	}
if (msg.content === 'Japanese') {
msg.channel.send(`Fucking weeb`)
}
if (msg.content === 'japanese') {
	msg.channel.send(`Fucking weeb`)
	}

	//For people who say "XD"
if (msg.content === 'Xd') {
msg.channel.send(`***Stop it, get some help.***`)
}
if (msg.content === 'xd') {
	msg.channel.send(`***Stop it, get some help.***`)
	}
if (msg.content === 'XD') {
msg.channel.send(`***Stop it, get some help.***`)
}
if (msg.content === 'xD') {
	msg.channel.send(`***Stop it, get some help.***`)
	}

	//Goodnight reply
if (msg.content === 'Goodnight') {
msg.channel.send(`Goodnight buddy! :kissing_heart:`)
}
if (msg.content === 'goodnight') {
	msg.channel.send(`Goodnight buddy! :kissing_heart:`)
	}
if (msg.content === 'Good night') {
msg.channel.send(`Goodnight buddy! :kissing_heart:`)
}
if (msg.content === 'good night') {
	msg.channel.send(`Goodnight buddy! :kissing_heart:`)
	}
if (msg.content === 'Gn') {
msg.channel.send(`Goodnight buddy! :kissing_heart:`)
}
if (msg.content === 'gn') {
	msg.channel.send(`Goodnight buddy! :kissing_heart:`)
	}
if (msg.content === 'Good Morning') {
msg.channel.send(`Good Morning to you too! :wave:`)
}
if (msg.content === 'Good Morning!') {
msg.channel.send(`Good Morning to you too! :wave:`)
}
if (msg.content === 'Good morning!') {
msg.channel.send(`Good Morning to you too! :wave:`)
}
if (msg.content === 'Good morning') {
msg.channel.send(`Good Morning to you too! :wave:`)
}
if (msg.content === 'good morning') {
msg.channel.send(`Good Morning to you too! :wave:`)
}
if (msg.content === 'good morning!') {
msg.channel.send(`Good Morning to you too! :wave:`)
}


//YEET
if (msg.content === 'yeet') {
msg.channel.send(`Nigga I will yeet you`)
}
if (msg.content === 'Yeet') {
msg.channel.send(`Nigga I will yeet you`)
}
if (msg.content === 'YEET') {
		msg.channel.send(`Nigga I will yeet you`)
		}
		if (msg.content === mentionBot + ' i need love') {
		msg.channel.send(`I love you :kissing_heart:`)
		}
		else if (msg.content === mentionBot + ' I need love') {
		msg.channel.send(`My heart beats for you :heartbeat:`)
		}
		if (msg.content === 'I want to watch the world burn') {
		msg.channel.send(`Christ man! Lighten up.`)
		}
		else if (msg.content === 'i want to watch the world burn') {
		msg.channel.send(`Christ man! Lighten up.`)
		}
		else if (msg.content === 'i just want to watch the world burn') {
		msg.channel.send(`Christ man! Lighten up.`)
		}
		else if (msg.content === 'I just want to watch the world burn') {
		msg.channel.send(`Christ man! Lighten up.`)
		}
		if (msg.content === 'ur mom gay') {
		msg.channel.send(`Yo, I got you, No u.`)
		}
		else if (msg.content === 'Ur mom gay') {
		msg.channel.send(`Yo, I got you, No u.`)
		}

if (msg.content === 'fuck me') {
msg.channel.send(`Gladly! :smirk:`)
}
if (msg.content === 'Fuck me') {
msg.channel.send(`Gladly! :smirk:`)
}
if (msg.content === 'fuck me?') {
	msg.channel.send(`I mean you gotta be sure.`)
	}
	if (msg.content === 'Fuck me?') {
	msg.channel.send(`I mean you gotta be sure.`)
	}
	
	//Keyword commands that send video links
if (msg.content === 'I hurt myself') {
msg.channel.send(hurtmyself)
}
if (msg.content === 'i hurt myself') {
msg.channel.send(hurtmyself)
}
if (msg.content === '420') {
msg.channel.send(anime420)
}

	//Keyword commands that send image links
	if (msg.content === 'Kill me') {
		msg.channel.send(`Alright!
					`
					+ sonicgun)
		}
		else	if (msg.content === 'Kill me!') {
		msg.channel.send(`Alright!
				`
				+ sonicgun)
		}
			else	if (msg.content === 'kill me') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else	if (msg.content === 'kill me!') {
				msg.channel.send(`Alright!
				`
			+ sonicgun)
			}
			else	if (msg.content === 'Kill Me') {
				msg.channel.send(`Alright!
				`
			+ sonicgun)
			}
			else	if (msg.content === 'Kill Me!') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else	if (msg.content === 'KILL ME') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'KILL ME!') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'i wanna die') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'i want to die') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'I want to die') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'i just want to die') {
				msg.channel.send(`Alright!`
				+ sonicgun)
			}
			else if (msg.content === 'I just want to die') {
					msg.channel.send(`Alright!`
					+ sonicgun)
			}
			else if (msg.content === 'i just wanna die') {
				msg.channel.send(`Alright!
				`
				+ sonicgun)
			}
			else if (msg.content === 'I just wanna die') {
					msg.channel.send(`Alright!
					`
					+ sonicgun)
			}

	//Hate speech filter
	if (msg.content === 'Nigger') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'nigger') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
  else if (msg.content === 'NIGGER') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'N i g g e r') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'N I G G E R') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'n i g g e r') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'Fag') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'fag') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'FAG') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'F A G') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'F a g') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'f a g') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'Faggot') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'F a g g o t') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'FAGGOT') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'F A G G O T') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'faggot') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
	else if (msg.content === 'f a g g o t') {
	  msg.channel.send("***This is your a warning. You will now gain a strike.*** " + mentionSean +  " ***has been notified***")
	}
});

client.login(tokens.token);