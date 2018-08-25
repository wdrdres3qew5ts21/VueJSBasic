new Vue({
    el: '#exercise',
    data: {
        value: 0,
        result : 'Not there yet.',
        delay : 5000
    },
    watch : {
        value : function () {
            console.log('trigger!');
            var vm=this;

            if(this.value==37){
                this.result='Done!';
            }
            setTimeout(function (){
                vm.value=0;

            },this.delay);
            console.log('ed')
        }
    }
});