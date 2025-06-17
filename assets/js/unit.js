const unitInfoData = {
    '기사': {
        '빨강': {
            name: '빨강 기사',
            image: 'images/unit/red_kni.png',
            txt: '빨강 유닛은 주변 아군 유닛을 강화합니다.',
            damage: '50, 태극 발동 시 200',
            bossDamage: '50, 태극 발동 시 200',
            passiveSkill: '자신을 포함한 주변 유닛 공격속도 3% 증가',
            activeSkill: '없음',
            acquisition: '유닛 뽑기로 획득'
        },
        '파랑': {
            name: '파랑 기사',
            image: 'images/unit/blue_kni.png',
            txt: '파랑 유닛은 피격받은 적군 유닛을 약화시킵니다.',
            damage: '50, 태극 발동 시 200',
            bossDamage: '50, 태극 발동 시 200',
            passiveSkill: '공격받은 적은 2초가 10%의 이동속도 감소 및 추가 데미지 적용',
            activeSkill: '없음',
            acquisition: '유닛 뽑기로 획득'
        }
        ,
        '노랑': {
            name: '노랑 기사',
            image: 'images/unit/yellow_kni.png',
            txt: '노랑 유닛은 골드 획득에 특화되어 있습니다.',
            damage: '50',
            bossDamage: '50',
            passiveSkill: '조합에 사용될 시 1골드 획득',
            activeSkill: '없음',
            acquisition: '유닛 뽑기로 획득'
        }
		,
        '초록': {
            name: '초록 기사',
            image: 'images/unit/green_kni.png',
            txt: '초록 유닛은 일반 유닛 데미지가 강력합니다.',
            damage: '200',
            bossDamage: '100',
            passiveSkill: '일반 유닛 상대 데미지 100 증가',
            activeSkill: '없음',
            acquisition: '파랑 기사 + 노랑 기사'
        }
		,
        '주황': {
            name: '주황 기사',
            image: 'images/unit/orange_kni.png',
            txt: '주황 유닛은 보스 유닛 데미지가 강력합니다.',
            damage: '100',
            bossDamage: '500',
            passiveSkill: '보스 유닛 상대 데미지 400 증가',
            activeSkill: '없음',
            acquisition: '빨강 기사 + 노랑 기사'
        }
		,
        '보라': {
            name: '보라 기사',
            image: 'images/unit/purple_kni.png',
            txt: '보라 유닛은 지속데미지와 기절상태를 부여합니다.',
            damage: '50',
            bossDamage: '50',
            passiveSkill: '공격 시 1데미지의 독 공격 4번 및 10% 확률로 2초간 기절',
            activeSkill: '없음',
            acquisition: '빨강 기사 + 파랑 기사'
        }
		,
        '하양': {
            name: '하얀 기사',
            image: 'images/unit/white_kni.png',
            txt: '하얀 유닛은 강력하고, 지속시간이 끝나면 무작위 색으로 변신합니다.',
            damage: '500, 백의 결속 사용시 600',
            bossDamage: '500, 백의 결속 사용시 600',
            passiveSkill: '지속시간 이후 무작위 색으로 변신',
            activeSkill: '없음',
            acquisition: '하얀 유닛 소환에서 룬 1개로 소환'
        }
		,
        '검정': {
            name: '검정 기사',
            image: 'images/unit/black_kni.png',
            txt: '검정 유닛은 가장 강력합니다.',
            damage: '1200, 흑의 결속 사용시 19,200',
            bossDamage: '1200, 흑의 결속 사용시 19,200',
            passiveSkill: '강력합니다.',
            activeSkill: '없음',
            acquisition: '빨강 기사 + 파랑 기사 + 노랑 기사 + 초록 기사 + 주황 기사 + 보라 기사'
        }
		
    },
    '궁수': {
        '빨강': {
            name: '빨강 궁수',
            image: 'images/unit/red_arc.png',
            txt: '빨강 유닛은 주변 아군 유닛을 강화합니다.',
            damage: '250, 태극 발동 시 1450',
            bossDamage: '250, 태극 발동 시 1450',
            passiveSkill: '자신을 포함한 주변 아군 유닛 공격속도 10% 증가',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '빨강 기사 3 조합'
        },
        '파랑': {
            name: '파랑 궁수',
            image: 'images/unit/blue_arc.png',
            txt: '파랑 유닛은 피격받은 적군 유닛을 약화시킵니다.',
            damage: '250, 태극 발동 시 1450',
            bossDamage: '250, 태극 발동 시 1450',
            passiveSkill: '공격 받은 적은 30% 이동속도 감소 및 추가 데미지 적용',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '파랑 기사 3 조합'
        }
        ,
        '노랑': {
            name: '노랑 궁수',
            image: 'images/unit/yellow_arc.png',
            txt: '노랑 유닛은 골드 획득에 특화되어 있습니다.',
            damage: '250',
            bossDamage: '250',
            passiveSkill: '공격 시 2% 확률로 1골드 획득',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '노랑 기사 3 조합'
        }
		,
        '초록': {
            name: '초록 궁수',
            image: 'images/unit/green_arc.png',
            txt: '초록 유닛은 일반 유닛 데미지가 강력합니다.',
            damage: '1250',
            bossDamage: '500',
            passiveSkill: '일반 유닛 상대 데미지 750 증가',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '초록 기사 3 조합'
        }
		,
        '주황': {
            name: '주황 궁수',
            image: 'images/unit/orange_arc.png',
            txt: '주황 유닛은 보스 유닛 데미지가 강력합니다.',
            damage: '500',
            bossDamage: '3000',
            passiveSkill: '보스 유닛 상대 데미지 2500 증가',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '주황 기사 3 조합'
        }
		,
        '보라': {
            name: '보라 궁수',
            image: 'images/unit/purple_arc.png',
            txt: '보라 유닛은 지속데미지와 기절상태를 부여합니다.',
            damage: '250',
            bossDamage: '250',
            passiveSkill: '공격 시 1데미지의 독 공격 4번 및 30% 확률로 2초간 기절',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '보라 기사 3 조합'
        }
		,
        '하양': {
            name: '하얀 궁수',
            image: 'images/unit/white_arc.png',
            txt: '하얀 유닛은 강력하고, 지속시간이 끝나면 무작위 색으로 변신합니다.',
            damage: '3000, 백의 결속 사용 시 6000',
            bossDamage: '3000, 백의 결속 사용 시 6000',
            passiveSkill: '지속시간 이후 무작위 색으로 변신',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '하얀 유닛 소환에서 룬 2개로 소환'
        }
		,
        '검정': {
            name: '검정 궁수',
            image: 'images/unit/black_arc.png',
            txt: '검정 유닛은 가장 강력합니다.',
            damage: '15,000, 흑의 결속 사용시 915,000',
            bossDamage: '15,000, 흑의 결속 사용시 915,000',
            passiveSkill: '강력합니다.',
            activeSkill: '공격 시 30% 확률로 세 방향으로 화살을 발사합니다.',
            acquisition: '빨강 궁수 + 파랑 궁수+ 노랑 궁수 + 초록 궁수 + 주황 궁수 + 보라 궁수'
        }
    },

	'창병': {
        '빨강': {
            name: '빨강 창병',
            image: 'images/unit/red_lan.png',
            txt: '빨강 유닛은 주변 아군 유닛을 강화합니다.',
            damage: '4000, 태극 발동 시 19,000',
            bossDamage: '4000, 태극 발동 시 19,000',
            passiveSkill: '자신을 포함한 주변 유닛 공격속도 30% 증가',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '빨강 궁수 3 + 빨강 기사 2'
        },
        '파랑': {
            name: '파랑 창병',
            image: 'images/unit/blue_lan.png',
            txt: '파랑 유닛은 피격받은 적군 유닛을 약화시킵니다.',
            damage: '4000, 태극 발동 시 19,000',
            bossDamage: '4000, 태극 발동 시 19,000',
            passiveSkill: '공격 받은 적은 70% 이동 속도 감소 및 추가 데미지 적용',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '파랑 궁수 3 + 파랑 기사 2'
        }
        ,
        '노랑': {
            name: '노랑 창병',
            image: 'images/unit/yellow_lan.png',
            txt: '노랑 유닛은 골드 획득에 특화되어 있습니다.',
            damage: '4000',
            bossDamage: '4000',
            passiveSkill: '공격 시 10% 확률로 1골드 획득',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '노랑 궁수 3 + 노랑 기사 2'
        }
		,
        '초록': {
            name: '초록 창병',
            image: 'images/unit/green_lan.png',
            txt: '초록 유닛은 일반 유닛 데미지가 강력합니다.',
            damage: '24000',
            bossDamage: '8000',
            passiveSkill: '일반 유닛 상대 데미지 16000 증가',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '초록 궁수 3 + 초록 기사 2'
        }
		,
        '주황': {
            name: '주황 창병',
            image: 'images/unit/orange_lan.png',
            txt: '주황 유닛은 보스 유닛 데미지가 강력합니다.',
            damage: '8000',
            bossDamage: '100,000',
            passiveSkill: '보스 유닛 상대 데미지 92,000 증가',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '주황 궁수 3 + 주황 기사 2'
        }
		,
        '보라': {
            name: '보라 창병',
            image: 'images/unit/purple_lan.png',
            txt: '보라 유닛은 지속데미지와 기절상태를 부여합니다.',
            damage: '4000',
            bossDamage: '4000',
            passiveSkill: '1 데미지의 독 공격 4번 및 50% 확률로 3초간 기절',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '보라 궁수 3 + 보라 기사 2'
        }
		,
        '하양': {
            name: '하얀 창병',
            image: 'images/unit/white_lan.png',
            txt: '하얀 유닛은 강력하고, 지속시간이 끝나면 무작위 색으로 변신합니다.',
            damage: '50,000, 백의 결속 사용 시 110,000',
            bossDamage: '50,000, 백의 결속 사용 시 110,000',
            passiveSkill: '지속시간 이후 무작위 색으로 변신',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '하얀 유닛 소환에서 룬 7개로 소환'
        }
		,
        '검정': {
            name: '검정 창병',
            image: 'images/unit/black_lan.png',
            txt: '검정 유닛은 가장 강력합니다.',
            damage: '1,000,000, 흑의 결속 사용시 6,000,000',
            bossDamage: '1,000,000, 흑의 결속 사용시 6,000,000',
            passiveSkill: '강력합니다.',
            activeSkill: '공격 시 30% 확률로 창을 던져 닿은 적을 모두 타격합니다.',
            acquisition: '빨강 창병 + 파랑 창병 + 노랑 창병 + 초록 창병 + 주황 창병 + 보라 창병'
        }
    },
    
	'마법사': {
        '빨강': {
            name: '빨강 마법사',
            image: 'images/unit/red_mag.png',
            txt: '빨강 유닛은 주변 아군 유닛을 강화합니다.',
            damage: '25,000, 태극 발동 시 135,000',
            bossDamage: '25,000, 태극 발동 시 135,000',
            passiveSkill: '자신을 포함한 주변 아군 유닛 공격 속도 50% 증가',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다,스킬 사용 시 메테오를 날립니다.',
            acquisition: '빨강 창병 3 + 빨강 궁수 2'
        },
        '파랑': {
            name: '파랑 마법사',
            image: 'images/unit/blue_mag.png',
            txt: '파랑 유닛은 피격받은 적군 유닛을 약화시킵니다.',
            damage: '25,000, 태극 발동 시 135,000',
            bossDamage: '25,000, 태극 발동 시 135,000',
            passiveSkill: '주변 적군은 60% 이동속도 감소 및 추가 데미지 적용',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다, 스킬 사용 시 주변 적군 5초간 이동속도 100% 감소 및 추가 데미지 적용',
            acquisition: '파랑 창병 3 + 파랑 궁수 2'
        }
        ,
        '노랑': {
            name: '노랑 마법사',
            image: 'images/unit/yellow_mag.png',
            txt: '노랑 유닛은 골드 획득에 특화되어 있습니다.',
            damage: '25,000',
            bossDamage: '25,000',
            passiveSkill: '공격 시 15% 확률로 2골드 획득',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다,스킬 사용 시 3골드를 획득합니다.',
            acquisition: '노랑 창병 3 + 노랑 궁수 2'
        }
		,
        '초록': {
            name: '초록 마법사',
            image: 'images/unit/green_mag.png',
            txt: '초록 유닛은 일반 유닛 데미지가 강력합니다.',
            damage: '300,000',
            bossDamage: '40,000',
            passiveSkill: '사거리 2배 증가 및 일반 유닛 상대 데미지 260,000 증가',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다,벽을 튕기는 기본 공격을 사용합니다.',
            acquisition: '초록 창병 3 + 초록 궁수 2'
        }
		,
        '주황': {
            name: '주황 마법사',
            image: 'images/unit/orange_mag.png',
            txt: '주황 유닛은 보스 유닛 데미지가 강력합니다.',
            damage: '40,000',
            bossDamage: '300,000',
            passiveSkill: '보스 유닛 상대 데미지 260,000 증가 ',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다,스킬 사용 시 단일 적에게 현재 체력에 비례한 데미지 3회 적용',
            acquisition: '주황 창병 3 + 주황 궁수 2'
        }
		,
        '보라': {
            name: '보라 마법사',
            image: 'images/unit/purple_mag.png',
            txt: '보라 유닛은 지속데미지와 기절상태를 부여합니다.',
            damage: '20,000',
            bossDamage: '20,000',
            passiveSkill: '3데미지의 독 공격을 4번 및 60% 확률로 5초간 기절',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다,스킬 사용 시 범위 내 적에게 60,000 데미지를 8번 입히는 독 공격',
            acquisition: '보라 창병 3 + 보라 궁수 2'
        }
		,
        '하양': {
            name: '하얀 마법사',
            image: 'images/unit/white_mag.png',
            txt: '하얀 유닛은 강력하고, 지속시간이 끝나면 무작위 색으로 변신합니다.',
            damage: '1,000,000, 백의 결속 사용 시 6,000,000',
            bossDamage: '1,000,000, 백의 결속 사용 시 6,000,000',
            passiveSkill: '지속시간 이후 무작위 색으로 변신',
            activeSkill: '광역 피해를 입히는 기본 공격을 사용합니다',
            acquisition: '하얀 유닛 소환에서 룬 20개로 소환'
        }
		,
        '검정': {
            name: '검정 마법사',
            image: 'images/unit/black_mag.png',
            txt: '검정 유닛은 가장 강력합니다.',
            damage: '0',
            bossDamage: '0',
            passiveSkill: '가장 강력합니다.',
            activeSkill: '게임에서 특수 승리합니다.',
            acquisition: '빨강 마법사 + 파랑 마법사 + 노랑 마법사 + 초록 마법사 + 주황 마법사 + 보라 마법사'
        }
    },
};



let selectedJob = '기사';
let selectedColor = '빨강';


const jobButtons = document.querySelectorAll('input[name="job"]');
const colorButtons = document.querySelectorAll('input[name="color"]');

jobButtons.forEach(button => {
    button.addEventListener('change', (event) => {
        selectedJob = event.target.value;
    });
});

colorButtons.forEach(button => {
    button.addEventListener('change', (event) => {
        selectedColor = event.target.value;
    });
});


function updateUnitInfo() {
    const unitData = unitInfoData[selectedJob]?.[selectedColor];
    if (unitData) {
        document.getElementById('unit-image').src = unitData.image;
        document.getElementById('unit-name').textContent = unitData.name;
        document.getElementById('unit-txt').textContent = ` ${unitData.txt}`;
        document.getElementById('unit-damage').textContent = `일반 데미지: ${unitData.damage}`;
        document.getElementById('unit-boss-damage').textContent = `보스 데미지: ${unitData.bossDamage}`;
        document.getElementById('unit-passive-skill').textContent = `패시브 스킬: ${unitData.passiveSkill}`;
        document.getElementById('unit-active-skill').textContent = `액티브 스킬: ${unitData.activeSkill}`;
        document.getElementById('unit-acquisition').textContent = `획득 방법: ${unitData.acquisition}`;
    }
}


document.getElementById('confirm-btn').addEventListener('click', updateUnitInfo);


document.addEventListener('DOMContentLoaded', updateUnitInfo);