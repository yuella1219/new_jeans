const _box = document.getElementById('repeat');

const _arr = [
    { text : `Hani` },
    { text : `Minji`},
    { text : `Daniel`},
    { text : `Haerin`},
    { text : `Hyein`}
]
let _arr_copy = {};

const copyObj = (obj) =>{
    const _first = document.querySelector('#first');
    let type = typeof(obj);
    // let _print = value[_key];
    // console.log(_print)
    
    if(type == 'object'){
        // _arr_copy = JSON.parse(JSON.stringify(obj));
        // _arr_copy = [...obj];
        if(Array.isArray(obj)){
            _arr_copy = [];

            Object.keys(obj).forEach(e => _arr_copy[e] = copyObj(obj[e]));

            for(var i = 0; i < _arr_copy.length; i++){
                let _key = _arr_copy[Object.keys(_arr_copy)[i]];
                let _keyname = _key[Object.keys(_key)];

                let _span = document.createElement('span');
                _span.innerHTML = `We love ${_keyname}<br>`;
                _first.appendChild(_span)
            }
        }
    }else{
        _arr_copy = obj;
    }
    return _arr_copy
}
const _prizes = [
    {
        grade : `S`,
        photo : [
            {
                name : `minji`,
                src : `https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFoczBha242eGRnaGtmbjlyNDh1bzFwdHN0NXYybmttY3hqenN0cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MRS3jjjxU8SdXHHglm/giphy.gif`
            },
            {
                name : `hani`,
                src : `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHA3enZ3b3pxM3FvZ3BzcHltcXU3ZzRrcndsd2FuMnAycXFkMmV2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b8fAGM3mh4bnNIC8BD/giphy.gif`
            },
            {
                name : `haerin`,
                src : `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNpNTJkZWE3N2FsangwbDY2NXFmdXMxdzhma2d4ODkycjFweWRwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gN6HU3bAjDUPpr9oWJ/giphy.gif`
            },
            {
                name : `hyein`,
                src : `https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDJ3ZHg4NXJveGN6anExNnA0Z3N1d3M0Y3o4cGFtY3p0azNocWd3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJ3Nu7YaYrtcFuR9sI/giphy.gif`
            },
            {
                name : 'daniel',
                src : `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWhwcDhkaG9veTYzNXNpOXpvd2l6YzFndjh5anNnczY4bHloM3pxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VtquEUCQw4rrZGCZ3w/giphy.gif`
            }
        ],
        percentage : 5
    },
    {
        grade : `A`,
        photo : [
            {
                name : `grade-a`,
                src : `https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBucWMxa2Npbjc5dDR3N3V1ejZxMXlwc3BnOXIyenhwaWpxMWgwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pO4UHglOY2vII/giphy.gif`
            },
            {
                name : `grade-a`,
                src : `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjB5ZG9yMDF6OGxuYnNnbWlrZmptdmVuc3Ixc2o3N3MzamltdjAwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3eKdC7REvgOt2/giphy.gif`
            },
            {
                name : `grade-a`,
                src : `https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODg4NzJ4aWNibnJ3dXQ0cWtrM2s3MTFmYmU3Y3A1dGszZWZqenRnZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2UdIWuCRbUL6/giphy.gif`
            },
            {
                name : `grade-a`,
                src : `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVobnhyczFsZzY3eXZiaTJwNzduMWMzejE5enkzMjY1b2MzaTJzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R1MYZBEos2qyI/giphy.gif`
            },
            {
                name : `grade-a`,
                src : `https://media0.giphy.com/media/nJZxhesBFKbCw/giphy.gif?cid=ecf05e47aj07finekqejt2myrdb71wf6i7dkdcsu9iwugaxx&ep=v1_gifs_related&rid=giphy.gif&ct=g`
            },
        ],
        percentage : 15
    },
    {
        grade : `B`,
        photo : [
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?w=1380&t=st=1689837370~exp=1689837970~hmac=6f68691678632810567bf6ee20fb073f44cd27064fcacc9183d386b3c51d02dd`
            },
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/koh-nangyuan-surat-thani-thailand_1258-729.jpg?w=740&t=st=1689837416~exp=1689838016~hmac=fd1888f59e9671e8d268f99d7cd3bcd4cb4462415c3be3a0d8c1156dbe2a962f`
            },
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=900&t=st=1689837429~exp=1689838029~hmac=6c7e033a736defa325cb82db2a26b5393b92af3468ac567135f29f59320eef48`
            },
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/forest-trees-filtered-image-processed-vintage-effect_1232-2798.jpg?w=1060&t=st=1689837441~exp=1689838041~hmac=ad125d2bd1bd6aca84d5f47c7822984d7ac1c06dea87d27407504375081cb4de`
            },
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/city-park-blue-sky-with-downtown-skyline-background_1127-2298.jpg?w=1380&t=st=1689837451~exp=1689838051~hmac=35169ed4fb87b05930998951d673f557120c43265e0b4222f80c161b83835482`
            },
            {
                name : `grade-b`,
                src : `https://img.freepik.com/free-photo/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens_181624-40920.jpg?w=740&t=st=1689837468~exp=1689838068~hmac=77a778dc5ee691d5d09f4545f40464fca8690b53be9b64b15c20f91e8349114f`
            },
        ],
        percentage : 35
    },
    {
        grade : `C`,
        photo : [
            {
                name : `grade-c`,
                src : `https://as2.ftcdn.net/v2/jpg/00/74/15/95/1000_F_74159556_67n5823V7Ei87a4g6JJnYHC0yMSo1AEy.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as1.ftcdn.net/v2/jpg/03/96/11/60/1000_F_396116072_vIWsiyjs1K62BEgn601Ta9k8xLftu4Ff.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as2.ftcdn.net/v2/jpg/00/41/28/31/1000_F_41283164_VwIoJkj9cnsEuCOcUOhk2NDC0A70TWXo.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as1.ftcdn.net/v2/jpg/03/77/56/40/1000_F_377564091_N26SiT8j0YzDFesm8pSEAzwYWhqoNBvb.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as2.ftcdn.net/v2/jpg/00/04/65/23/1000_F_4652352_C6bqQNUlk6k6KDS8GsNWqifaYz8GQ26T.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as2.ftcdn.net/v2/jpg/01/36/91/57/1000_F_136915769_OJOj7wL8kyBBkFm8BiYOBc1RSwYVRz6f.jpg`
            },
            {
                name : `grade-c`,
                src : `https://as1.ftcdn.net/v2/jpg/02/83/82/76/1000_F_283827610_cvNXOdc6CqXaLJnZBHQozk45usWSR4Rt.jpg`
            },
        ],
        percentage : 100
    }
]

let _addArr = [];
const _body = document.querySelector('.img-wrap');
const _add = document.querySelector('#grade-up');

const _reaulte = document.querySelector('.img-wrap img');
const _label = document.querySelector('.label.grade');
const _charge = document.querySelector('.coin-count em');
const _gauge = document.querySelector('#gauge');
const GAUGE_KEY = 70;

let _coin = 0;
let _gaugeCount = GAUGE_KEY;

// 확률업 배열 추가
const pushMemver = (arr, m) =>{
    arr.push(m);
    arr.push(m);
}

// 멤버 별 확률업 배열 추가하기
const rouletteRunFunctionMember = () =>{
    let _member = event.target.closest('button').getAttribute('data-name');

    // 디폴트 배열 복사
    _addArr = JSON.parse(JSON.stringify(_prizes));

    let _gradeArr = _addArr.find(e => e.grade === 'S');
    let _pushArr = _gradeArr.photo;
    let _name = _pushArr.find(e => e.name == _member);
    let _push = _pushArr.filter(e => e.name == _member);

    if(_push.length <= 1){
        pushMemver(_pushArr, _name)

    }else if(_push.length >= 3){

    }

    rouletteRunFunction(_addArr);
}

const rouletteRunFunctionNormal = () =>{
    rouletteRunFunction(_prizes);
}

// 마일리지 게이지
const gaugeRencerFunction = () =>{
    _gauge.style = '--gauge-width : ' + (100 - ((100 / GAUGE_KEY) * (GAUGE_KEY - _gaugeCount))) + '%';
}

// 룰렛 디폴트
const rouletteRunFunction = (arr) =>{
    let _score =+ Math.floor(Math.random() * 101)//.toFixed(1);
    _coin++;
    _gaugeCount--;
    _charge.innerText = _coin;
    gaugeRencerFunction();
    function mileageCount(e){
        if(_score > 3 && _gaugeCount == 0){
                _gaugeCount = GAUGE_KEY;
                _gauge.style = '--gauge-width : 100%' ;
                _score = 0;
            }
    }

    // 배열 돌면서 해당하는 그레이드 찾아 결과물 노출
    for(var i=0; i<=arr.length; i++){
        // if(i == 1){
        //     continue;  //작동 [0,2,3,4]
        // }
        // console.log("i: ", i);

        // if(i == 3){
        //     break; //작동 [0,2,3]
        // }

        let e = arr[i];                

        mileageCount(e);
        // 스코어에 따른 결과물 노출
        if(_score <= e.percentage){
            let _count = e.photo.length;
            let _num = Math.floor(Math.random() * _count);
            let _grade = e.grade;
            let _prizeName = e.photo[_num].name;
            let _prizeImg = e.photo[_num].src;

            _reaulte.setAttribute('src', _prizeImg);
            _label.classList.remove(`S`, `A`, `B`, `C`);
            _label.classList.add(_grade);
            _label.innerHTML = _grade;
            
            // S급 뽑기 성공 시
            if(e.grade == 'S'){
                _coin = 0;
                _charge.innerText = _coin;
                _gaugeCount++;
                gaugeRencerFunction();
                //천장 이후 게이지 - 되는 현상 초기화
                if(_gaugeCount > 70){
                    _gaugeCount = GAUGE_KEY;
                }
            }
            // 확률업 마크 노출
            if(_score <= 3 && e.photo.length >= 7 && _num > 4){
                _add.classList.remove('hide')
            }else{
                _add.classList.add('hide');
            }
            break;
        }

    }

}

const _btn_D = document.querySelector('#btn-d');
const _btn_M = document.querySelector('#btn-m');
const _btn_DN = document.querySelector('#btn-dn');
_btn_D.addEventListener('click', rouletteRunFunctionNormal);
_btn_M.addEventListener('click', rouletteRunFunctionMember);
_btn_DN.addEventListener('click', rouletteRunFunctionMember);
const foldControlsButton = ()=>{
    let _foldBox = event.target.closest('button').getAttribute('aria-controls');
    let _Box = document.querySelector(`#${_foldBox}`);

    _Box.toggleAttribute('hidden');
    if(_foldBox = `fold02`){
        cardEventFunction();
    }
    if(_foldBox = `fold03`){
        newJeansIntro();
        newJeansReset();
    }
}
const cardEventFunction = () =>{
    const _frame = document.querySelector('.card-wrap');
    const _card = document.querySelector('#card');
    const _cardBox = document.querySelector('#card .img-wrap');
    const _light = document.querySelector('.light');

    let { x, y, width, height } = _frame.getBoundingClientRect();

    const mouseMove = (e)=>{
        const left = e.clientX - x;
        const top = e.clientY - y;
        const _centerX = left - width / 2;
        const _centerY = top - height / 2;
        const d = Math.sqrt(_centerX**2 + _centerY**2);

        _card.style = `--scaled-x : ${-_centerY / 100}; --scaled-y : ${_centerX / 100}; --scaled-z : ${d / 10}deg;`
        _light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, rgba(255,255,255,0.4) 0%, rgba(93,255,249,0.05) 70%, rgba(255,255,255,0.08587184873949583) 100%)`
        
        _cardBox.style = `box-shadow : ${-_centerX / 10}px ${-_centerY / 10}px 10px rgba(0, 0, 0, 0.15);`
        // console.log(_cardBox)
    }

    _card.addEventListener('mouseenter', ()=>{
        _card.addEventListener('mousemove', mouseMove)
    })

    _card.addEventListener('mouseleave', ()=>{
        _card.removeEventListener('mousemove', mouseMove)
        _cardBox.style.boxShadow = '';
        _card.style.transform = '';
        _light.style.backgroundImage = '';
    })
}
// 속성 data-price 받아서 텍스트랑 클래스 추가
const priceRender = ()=>{

    let _itemAll = document.querySelectorAll("li.item");
    for(var i = 0; i < _itemAll.length; i++){
        let _btn = Number(_itemAll[i].querySelector('button').getAttribute('data-price'));
        let _label = _itemAll[i].querySelector('.label');
        _label.classList.add(`cost-${_btn}`);
        _label.innerText = _btn.toLocaleString('ko-KR') + '원';
    }
}

// 스와이퍼.. 이걸 왜 사서 고생했냐
const _showcase = document.querySelector('.showcase');
const showcasePagenation = () =>{
    let _btnType = String(event.target.getAttribute('aria-label'));
    let _show = document.querySelector('.showcase .show');
    let _prev = _show.previousElementSibling;
    let _next = _show.nextElementSibling;
    let TRANSITION_KEY = _showcase.clientWidth;

    const positionMove = () =>{
        _show = document.querySelector('.showcase .show');
        let _pos = Number(_show.getAttribute('data-page-number').replace("p-",""));
        _showcase.style = `--case-position : -${(TRANSITION_KEY * _pos)}px`
        if(_pos == 0){
            event.target.classList.add('lock');
        }else if(_pos == 2){
            event.target.classList.add('lock');
        }
    }

    switch(_btnType){
        case 'prev' : 
                if(_prev != null){
                    _show.classList.remove('show');
                    _prev.classList.add('show');
                    positionMove();                            
                    event.target.nextElementSibling.classList.remove('lock');
                }else{
                    break;
                }                    
            break;
        case 'next' : 
            if(_next != null){
                    _show.classList.remove('show');
                    _next.classList.add('show');
                    positionMove();
                    event.target.previousElementSibling.classList.remove('lock');
                }else{
                    break;
                }
            break;
    }
}

//카트 담기
let _ballCount = 0;
// 카트 안에 볼 생성
// 색상 추가 > 배열에 담은 것 불러오기
const ballCreateAction = () =>{
    const _item = document.createElement('span');
    const _basket = document.querySelector('.basket .item-in');
    let _btnType = String(event.target.closest('button').getAttribute('data-price'));

    _ballCount++;
    _basket.appendChild(_item);
    _item.classList.add('animate');
    _item.classList.add(`cost-${_btnType}`);

    if(_ballCount > 9){
        _item.style = `margin-bottom : -30px`;
        setTimeout(()=>{
            _item.classList.add('hide')
        }, 400);
    }
    if(_ballCount > 15){
        alert('더 이상 담을 수 없습니다.')
        return;
    }
}

// 타이머
const TOTAL_TIME = 150;
let _ontime = TOTAL_TIME;
const _timer = document.querySelector('.timer-bar');
let _check;
const timerStart = () =>{
    const timerCalculator = () =>{
        _ontime--;
        _timer.style = '--timer-gauge : ' + (((100 / TOTAL_TIME) * (TOTAL_TIME - _ontime))) + '%';
        
        if(_ontime <= 0){
            clearInterval(_check);
            marketResulteFail();
        }
    }
    _check =  setInterval(() => {
            timerCalculator();
        }, 1000);
}

// 게임 시작 전 리셋
const _readMeObj = document.querySelector('.start-blur .read-me');
const _blur = document.querySelector('.start-blur');
const _blur_result = document.querySelector('.finish-blur');
const _readBtn = document.querySelector('.start-blur .readme-btn');

const newJeansIntro = () =>{
    // 시작 가림막 리셋
    _blur.classList.remove('hide');
    // _blur_result.classList.remove('hide')
    if(_blur_result.classList.contains('fail')) _blur_result.classList.remove('fail');
    if(_blur_result.classList.contains('success')) _blur_result.classList.remove('success');
    _readMeObj.classList.add('hide');
    _readBtn.classList.remove('hide');
}

const newJeansReset = () =>{
    if(_blur_result.classList.contains('fail')) _blur_result.classList.remove('fail');
    if(_blur_result.classList.contains('success')) _blur_result.classList.remove('success');
    const _basket = document.querySelector('.basket .item-in');

    // 스와이퍼 리셋
    let _show = document.querySelector('.showcase .show');
    let _pos = 0;
    _show.classList.remove('shoe');
    const _firstPage = document.querySelector('.showcase-page:first-of-type');
    _firstPage.classList.add('show');
    const _next = document.querySelector('.pagenation .next')
    if(_next.classList.contains('lock')){
        _next.classList.remove('lock');
    }
    _showcase.style = `--case-position : 0;`

    // 바구니 초기화
    _ballCount = 0;
    _wholeCost = 0;
    while(_basket.hasChildNodes()){
        _basket.removeChild(_basket.firstChild);
    }

    // 타이머 초기화
    _ontime = 150;
    _timer.style = '--timer-gauge : 0%';

    // 타이머 리셋
    clearInterval(_check);
}

// 설명보기
const newJeansMarketReadMe = () =>{
    _readBtn.classList.add('hide');
    _readMeObj.classList.remove('hide');
}

const marketResulteFail = () => {
    _blur_result.classList.remove('hide');
    _blur_result.classList.add('fail')
    // clearInterval(_check);
}

const marketResulteSuccess = () => {
    _blur_result.classList.remove('hide');
    _blur_result.classList.add('success')
}

// 결과 버튼
const costCalculate = (i) => {
    const TOTAL_KEY = 30000;
    if(i > TOTAL_KEY || i < TOTAL_KEY){
        marketResulteFail();
    }else if(i == TOTAL_KEY){
        marketResulteSuccess();
    }
}

let _wholeCost = 0;
// 담은 물건 계산하기
const ballCostCount = () => {
    let _cost = Number(event.target.closest('button').getAttribute('data-price'));
    _wholeCost = _wholeCost + _cost;
    console.log(_wholeCost)
}

//물건 클릭 시 필요 함수 호출
const itemChoiceFunction = () =>{
    ballCreateAction();            
    ballCostCount();
}

const newjeansMarket = () =>{
    newJeansIntro();
    newJeansReset();
}

priceRender();

const newJeansMarketStart = () =>{
    _blur.classList.add('hide');
    _blur_result.classList.add('hide');
    newJeansReset();
    timerStart();
    // newJeansClockStart();
}

const _resulteBtn = document.querySelector('#resulte');
_resulteBtn.addEventListener('click', (()=>{
    costCalculate(_wholeCost);
}))