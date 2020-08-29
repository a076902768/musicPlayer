var app = new Vue({
    el: '#musicBox',
    data: {
        audioAttr: undefined,
        ispaused: true,
    },
    methods: {
        updateDate(){
            const vm = this;
            var player = document.getElementById('Audio'),
            map =  [
                'error','src','currentSrc',
                'networkState','readyState',
                'preload','buffered','played',
                'seekable','seeking','currentTime',
                'startTime','duration','paused',
                'defaultPlaybackRate','playbackRate',
                'ended','autoplay','loop','controls','volume','muted'];
            window.setInterval(function(){
                var str = '';
                for(var i=0, j=map.length; i<j; i++) {
                    str += map[i] + ' : ' + player[map[i]] + '<br>\n';
                }
                document.getElementById('panel').innerHTML = str;
                let process = document.getElementById('timeLine_process');
                process.style.width = `${(Number(player[map[10]]) / Number(player[map[12]]))*100}%`;
            }, 100);
        },
        played(){
            const vm = this;
            vm.audioAttr.play();
            console.log(vm.audioAttr.paused);
            vm.ispaused = false;
        },
        paused(){
            const vm = this;
            vm.audioAttr.pause();
            console.log(vm.audioAttr.paused);
            vm.ispaused = true;
        }
    },
    mounted() {
        console.log('hello vue');
        const vm = this;
        vm.audioAttr = vm.$refs.audio;
        console.log(document.getElementsByTagName('audio')[0].attributes);
        vm.ispaused = vm.audioAttr.paused;

        vm.updateDate();
    },
});