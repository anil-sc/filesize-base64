import { File, Media } from 'nodejs-shared';

// Read files in base64 format
const dataUrl = File.readAsBase64('license.png'); // 'data:image/jpeg;base64,/9j/4AAQSk...'

// Convert base64 format to blob format 
// dataUrl = 'data:image/jpeg;base64,/9j/4AAQSk...'
const blob = Media.convertBase64ToBlob(dataUrl); // /9j/4AAQSk...

/* 
You can calculate the file size (in bytes) using below formula:

x = (n * (3/4)) - y
Where:

1. x is the size of a file in bytes

2. n is the length of the Base64 String

3. y will be 2 if Base64 ends with '==' and 1 if Base64 ends with '='.

*/

let noOfPaddingCharacter = 0; // check whether '=' character exists or not
const length = blob.length; // total length of blob format string

if (blob.charAt(length - 2) === '=')
    noOfPaddingCharacter = 2;
else if (blob.charAt(length - 1) === '=')
    noOfPaddingCharacter = 1;

const fileSize = (length * (3/4)) - noOfPaddingCharacter;

console.log('Bytes = ',`${fileSize} bytes`);
console.log('KiloBytes = ',`${fileSize / 1024} kb`);
console.log('MegaBytes = ',`${fileSize / Math.pow(1024 , 2)} mb`);