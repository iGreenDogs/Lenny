const Discord = require("discord.js");
const client = new Discord.Client();

const activities_list = [
    "Prefix = \"&\"",
    "DREAM BOAT CLUTCH POG",
    "SB737 is a good youtuber",
    "Am I online?",
    "BEEP, BOOP",
    "GTG, Late for class",
    "Learn how to make your own bot. DM iGreenDogs #4611"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
var activity = [
  "WATCHING",
  "LISTENING",
  "PLAYING",
  "STREAMING"
]
client.on('ready', () => {
  console.log("Ahwaht?! I'm awake");
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        var randomActivity = activity[Math.floor(Math.random()*activity.length)];
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: randomActivity }); // sets bot's activities to one of the phrases in the arraylist.
    }, 1000); // Runs this every 10 seconds.
});

// Set the prefix
let prefix = "&";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
    console.log(message.author.tag + " just did '&ping'")
  } else
  if (message.content.startsWith(prefix + "test")) {
    console.log(message.author.tag + " just did '&test'")
    message.channel.send({embed: {
      color: 3447003,
      description: "A very simple Embed!"
    }});
  } else
  if (message.content.startsWith(prefix + "yay")) {
    message.channel.send("it works now");
    console.log(message.author.tag + " just did '&yay'")
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "Help",
      description: "The prefix is &. Ping, test, and yay are all test commands, but you can still use them. &glomgoldscheam 'freezes time'. &joke gives you a random joke . &avatar shows your discord avatar. Also, you can get your initiative with &initiative. More commands coming soon :)"
    }});
    console.log(message.author.tag + " just did '&help'")
  } else
  if (message.content.startsWith(prefix + "glomgoldscheam")) {
    console.log(message.author.tag + " just did '&glomgoldscheam'")
    message.member.setDeaf(true);
    message.channel.send({embed: {
      color: 3447003,
      title: "Glomgold",
      description: "The Command, &glomgoldscheam froze the world. (Got deafened in the voice chat)"
    }});
  } else
  if (message.content.startsWith(prefix + "joke")) {
    console.log(message.author.tag + " just did '&joke'")
    var myArray = [
      "A timid lion tamer kept looking for a protection claws in his contract",
      "People who bomb farms with lots of cows are called demoolitonists.",
      "Leopards are easy prey for hunters. Wherever they go, they are spotted.",
      "Sometimes life for a lens maker can be a real grind",
      "I have a friend who likes fishing. When I asked him how his day was, he said \"Reely good.\"",
      "It is well known that ghouls like to eat Scream of Wheat for breakfast.",
      "Did you know that crossing a hen and a dog gives you a pooched egg?",
      "The 'umbrella' was originally going to be called just \'brella\' but the inventor hesitated",
      "Inspecting mirrors is a job I could really see myself doing.",
      "I knew a woman who owned a taser. MAN, she was stunning",
      "Be alert. After all, the world needs more lerts.",
      "Ms. Bigger had a son who was bigger than she was because he was a little Bigger.",
      "The most famous fictional donkey was Donkey-Jote, invented by Miguel Cervantes",
      "I once made a movie involving robbers, but the MPA bandit.",
      "Pirate memes are hard to come up with. The good ones arrr gone.",
      "Fast food thieves are called hamburglars",
      "You should wear glasses while doing math. It improves division.",
      "Waffles are just pancakes with abs",
      "#titanic {  float: none;   }",
      "I wondered why the baceball kept getting bigger and bigger. Then it hit me.",
      "Orcas tend to weigh about a few hundred killer-grams",
      "Skeletons study for tests by boning up on the facts",
      "The streets that ghosts live on are called dead ends",
      "Sheep like to get haircuts at the baa baa shop",
      "Two wrongs don't make a right, but two rights make the first airplane",
      "A soldier hid in a cannon to avoid guard duty, but he was discharged",
      "What do you get when you cross a galaxy and a toad?   Star Warts!",
      "What did the egg say when he narrowly escaped an explosion then was arrested for jewelry theft?        \"You could say I slipped out of the frying pan and into the fire!\"",
      "Why can't you play poker in the African Savanna? There's to many cheetahs!",
      "Why is it always hot in the corner of a square room? Because it's always 90 degrees!",
      "How come a man got struck by lightning while driving a train? He was a good conductor.",
      "Have you heard of the restaurant on the moon? The food's good but there's no atmosphere.",
      "What did the shoe say to the hat?            \"You go on ahead - I'll follow on foot.\""
    ];
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    message.channel.send(randomItem);
  } else if (message.content.startsWith(prefix + "initiative")) {
    console.log(message.author.tag + " just did '&initiative'")
    var myNum = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ];
    var randomNum = myNum[Math.floor(Math.random()*myNum.length)];
    message.channel.send("For <@" + message.author + ">, Initiative is " + randomNum);
  } else 
  if (message.content.startsWith(prefix + "avatar")) {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL() || `https://filmdaily.co/wp-content/uploads/2020/05/avatar_lede-1300x976.jpg`);
  }
});

client.login("NzMxNDc1MTYzMDc3NjcyOTYw.XwmlVQ.avyRjN6wjs8yi--32kUstIuxkc4");

