const Discord = require('discord.js');
const config = require('./config.json');

const Platformer = '692842478960771113';
const CubeRun = '692842377169076234';
const Cplusplus = '692845164238078073';
const Javascript = '692845014375596074';
const Python = '692845185411055736';
const CSharp = '692845130712875108';

/* C3 bot assignment */
const RolesChannel = '692843206919847977';
const BotChannel = '693079447200596039';
const MusicChannel = '693009731954147369';
const StaffChannel = '693085413027610644';

const OwnerID = '206805670874316801';
const SanctuaryID = '544182787129737226';
const C3ID = '692739863014801448';

const Prefix = config.prefix;





var RoleAssignmentMsg = new Discord.MessageEmbed()
    .setColor('#00ff5e')
    .setDescription('');

var MovieReview = new Discord.MessageEmbed()
	.setColor('#FF286F')
	.setTitle('Movie Title Arg')
	.setURL('https://discord.js.org/')
	.setAuthor("Chris's Movie Reviews")
	.setDescription('Movie Description Arg')
	.setImage('https://media.discordapp.net/attachments/544182787129737229/695998993833918515/Pink_guy.png')
	.setTimestamp();

const bot = new Discord.Client();


bot.on('message', /* action */ (message) => {
    
    if (message.guild.id == SanctuaryID) {

        const args = message.content.slice(Prefix.length).split(' + ');
        const command = args.shift().toLowerCase();

        if (command === 'review') {
            if (message.member.id == OwnerID) {
                if (!args.length) {
    
                    IncorrectCommandUsage = new Discord.MessageEmbed()
                    .setColor('#FF9B00')
                    .setDescription('Please provide the following Arguments for the command: [Movie Title] + [Movie IMDB Link] + [Movie Review] + [Movie Cover]');
    
                    message.author.send(IncorrectCommandUsage);
                    message.delete();
                } 
                else {
        
                    var Title = args[0];
                    var TitleURL = args[1];
                    var Description = args[2];
                    var ImageURL = args[3];
                    
                    MovieReview.setTitle(Title);
                    MovieReview.setURL(TitleURL);
                    MovieReview.setDescription(Description);
                    MovieReview.setImage(ImageURL);
        
                    message.delete();
        
                    message.channel.send(MovieReview);
        
                    
                }
            }
            else {
                NoPermission = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setDescription('You do not have permission to use that command!');
    
                message.author.send(NoPermission)
                message.delete();
            }
        }

        if (message) {
            message.react('692040223286362242');
        }
    }



    
        
});



//ONLY WORKS IN C3
bot.on('message', /* action */ (message) => {

    if (message.guild.id == C3ID) {

        
        if (message.channel.id == RolesChannel) {

            if (message.content == Prefix + 'role Platformer') {
                message.member.roles.add(Platformer);
                RoleAssignmentMsg.setDescription('You have been given the role: Platformer');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
            else if (message.content == Prefix + 'role Cuberun') {
                message.member.roles.add(CubeRun);
                RoleAssignmentMsg.setDescription('You have been given the role: CubeRun');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
            else if (message.content == Prefix + 'role C++') {
                message.member.roles.add(Cplusplus);
                RoleAssignmentMsg.setDescription('You have been given the role: C++');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
            else if (message.content == Prefix + 'role JS') {
                message.member.roles.add(Javascript);
                RoleAssignmentMsg.setDescription('You have been given the role: Javascript');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
            else if (message.content == Prefix + 'role Python') {
                message.member.roles.add(Python);
                RoleAssignmentMsg.setDescription('You have been given the role: Python');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
            else if (message.content == Prefix + 'role C#') {
                message.member.roles.add(CSharp);
                RoleAssignmentMsg.setDescription('You have been given the role: C#');
                message.channel.send(RoleAssignmentMsg);
            }  //Add a function that deleted their message and refers them to the correct channel
    
    
    }
    

    
    }
});

bot.on('message', /* action */ (message) => {

    const args = message.content.slice(Prefix.length).split(' + ');
    const command = args.shift().toLowerCase();


    if (command === 'maintenance') {
        if (message.author.id == OwnerID) {
            if (!args.length) {

                IncorrectCommandUsage = new Discord.MessageEmbed()
                .setColor('#FF9B00')
                .setDescription('Please provide the necessary arguments');

                message.author.send(IncorrectCommandUsage);
                message.delete();
            } 
            else {

                MaintenanceMessage = new Discord.MessageEmbed()
                var Title = args[0];
                var Description = args[1];
                
                MaintenanceMessage.setTitle(Title);
                MaintenanceMessage.setColor('#FF0000')
                MaintenanceMessage.setDescription(Description);
    
                message.delete();
    
                message.channel.send(MaintenanceMessage);
    
            }
        }
        else {
            NoPermission = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription('You do not have permission to use this command');

            message.author.send(NoPermission)
            message.delete();
        }
    }
        




});

bot.login(config.token);