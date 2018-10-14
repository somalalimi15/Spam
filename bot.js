client.on('message', message => {
    if (message.content === 'بوم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`**I'am Here | SooooooooooooooM | **`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    
