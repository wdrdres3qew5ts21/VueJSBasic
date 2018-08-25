new Vue({
        el: '#exercise',
        data: {
            hlTrigger: false,
            classDetail: null,
            color: 'color',
            size: 'size',
            clTr: false,
            sTr: false,
            ckPro: false,
            bar: {
                background: 'purple'
            },
            divDetail: {
                background: 'black',
                width: '100px',
                height: '100px'
            }

        },
        methods: {
            startEffect: function () {
                this.hlTrigger = !this.hlTrigger;
            },
            startProgress: function () {
                vm = this;
                this.ckPro = !this.ckPro;
                test = this;
                //กดปุ่มเเพื่อทำการเซ็ทค่าพื้นฐานให้แก่ระบบไว้
                this.bar = {
                    width: '0%',
                    height: '20px',
                    background: 'purple'
                }

                //ทำการ setInterval() เอาไว้โดยมีการเก้บตัวแปรนี้เอาไว้เพื่อเบรคเอาไว้คือ clearInterval()
                progressStart = setInterval(function () {
                    console.log(vm.bar.width);
                    //แบคอัพตัวแปรเอาไว้คือตัวแปรขนาดขนาด width progress ที่จะขยายตัวขึ้นไปทุกๆช่วงเวลา
                    //โดยตอนแรกก็ต้องทำการตัดมาก่อนเลยใช้ substr() นั่นเองเหมือนใน java
                    temptValue = parseInt(vm.bar.width.substring(0, vm.bar.width.length - 1));
                    if (temptValue >= 100) { //หยุดการทำงานถ้าเกิด progressbar ตันแล้ว
                        //ทำการ clearInterVal ที่ตัวเองเคยเขียนมาออกไป
                        clearInterval(progressStart);
                    }
                    else {//ถ้ายังไม่ถึงก็ทำการเพิ่มโหลดไปเรื่อยๆ
                        console.log(temptValue)
                        temptValue++;
                        vm.bar.width = temptValue + '%';
                    }
                }, 20);
            }
        }

    }
);
