var os = require('os');
var colors = require('colors');
var OSinfo = require('./modules/OSinfo');

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction) {
	console.log('You wrote: ' + instruction + 'trying to run command'.)
});
emitter.on('afterCommand', function() {
	console.log('Finish command');
});

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	}else if(type === 'Windows_NT'){
		type = "Windows";
	}

	var release = os.release();
	var cpu = os.cpus()[].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime:~', (uptime / 60), toFixed(0), 'min');
	console.log('Username:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);

}

exports.print = getOSinfo;
exports.getCPUDetails = getCPUDetails;

/*mozemy uzyc albo tego u gory albo tego na dole
	print: getOsInfo;
	getCPUDetails: getCPUDetails
}; */
