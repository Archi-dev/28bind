


const callbacks = {
    incCb: function (arg, arg1) {
        let a = 'increase callback ' + arg + ' steps: ' + arg1;
        console.log(a);
			return a;
		},


    decCb: function (arg, arg2) {
			let a =  'decrease callback ' + arg+ ' steps: ' + arg2;
			console.log(a);
			return a;
		},


    getCb: function (arg, arg3) {
			let a =  'get callback ' + arg+ ' steps: ' + arg3;
			console.log(a);
			return a;
    },

    freshCb: function (arg, arg3) {
			let a =  'refresh counting ' + arg+ ' steps: ' + arg3;
			console.log(a);
			return a;
    },
      StatCb: function (arg, arg1,arg2,arg3) {
			let a =  'increase counting ' + arg1+ ' decrease counting: ' + arg2+ ' get counting: ' + arg3+ ' call back: ' + arg;
			console.log(a);
			return a;
    },

}

function counter(num = 0, obj) {
    
        let count = num;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;


		function increse() {
			return obj?.incCb ? obj.incCb(++count,++num1) :  ++count;
		}


		function decrese() {
			return obj?.decCb ? obj.decCb(--count,++num2) :  --count;
		}


		function get() {
			return obj?.getCb ? obj.getCb(count,++num3) :  count;
    }
    function refresh() {
			return obj?.getCb ? obj.freshCb(count=num,num1=0,num2=0,num3=0) :  count;
    }
     function getStatistic() {
			return obj?.getCb ? obj.StatCb(count,num1,num2,num3) :  count;
		}


		return {
			increse,
			decrese, 
            get,
            refresh,
            getStatistic
		}


	}


	let newCounter = counter(10, callbacks);

// проверка обнуления счётчика
newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.getStatistic();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.get();
newCounter.get();

newCounter.refresh();
newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.decrese();
newCounter.get();
newCounter.get();
newCounter.getStatistic();