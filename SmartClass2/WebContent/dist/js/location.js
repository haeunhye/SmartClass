//링크  - javascript:page_link('1');
function page_link(m_code) {
	if(!m_code){
		return;
	}


var m = new Array();

	m["main"] = "/index.asp";

	m["1"] = "/intro/intro.jsp";
		m["11"] = "/intro/intro.jsp";
		m["12"] = "/intro/vision.jsp";
		m["13"] = "/intro/history.jsp";
		m["14"] = "/intro/edu_result.jsp";
		m["15"] = "/intro/osan_map.jsp";
			m["151"] = "/intro/osan_map.jsp";
			m["152"] = "/intro/yongin_map.jsp";
			m["153"] = "/intro/seoul_map.jsp";

	m["2"] = "/edu_process/sub_main.jsp";
		m["21"] = "/edu_process/off_edu.jsp";
			m["211"] = "/edu_process/off_edu.jsp";
			m["212"] = "/edu_process/online_edu.jsp";
		m["22"] = "/edu_process/consulting.jsp";


	m["3"] = "/use_guide/sub_main.jsp";
		m["31"] = "/use_guide/facilities_guide.jsp?#1";
			m["311"] = "/use_guide/facilities_guide.jsp?#1";
			m["312"] = "/use_guide/life_guide.jsp";
			m["313"] = "/use_guide/use_step.jsp";
			m["314"] = "/use_guide/use_charge.jsp";
			m["315"] = "/use_guide/estimate_calcurate.jsp";
			m["316"] = "/use_guide/use_apform.jsp";
			m["317"] = "/use_guide/osan_map.jsp";
		m["32"] = "/use_guide/mabook_guide.jsp?#1";	//용인연수원
			m["321"] = "/use_guide/mabook_guide.jsp?#1";	//시설안내 "/use_guide/m_facilities_guide.jsp";
			m["322"] = "/use_guide/yongIn_life_guide.jsp";	//생활안내 javascript:alert('준비중입니다')
			m["323"] = "/use_guide/use_step_ma.jsp";	//"이용안내 /use_guide/use_mabook_step.jsp";
			m["324"] = "/use_guide/use_charge_ma.jsp";	//이용요금
			m["325"] = "/use_guide/yongIn_estimate_calcurate.jsp";	//견적내기
			m["326"] = "/use_guide/use_apform_ma.jsp";	//이용신청서
			m["327"] = "/use_guide/yongin_map.jsp";	//"오시는길
		m["33"] = "/use_guide/seoul_facilities.jsp";
			m["331"] = "/use_guide/seoul_facilities.jsp";
			m["332"] = "/use_guide/use_seoul_step.jsp";
			m["333"] = "/use_guide/seoul_map.jsp";

	m["4"] = "/academy/sub_main.jsp";
		m["41"] = "/academy/intro.jsp";
		m["42"] = "/academy/off_edu.jsp";
			m["421"] = "/academy/off_edu.jsp";
			m["422"] = "/academy/on_edu.jsp";


	m["5"] = "/history/history.jsp";
		m["51"] = "/history/history.jsp";
			m["511"] = "/history/history.jsp";
			m["512"] = "/history/history_infor.jsp";
		m["52"] = "/history/history_exinfor.jsp";
			m["521"] = "/history/history_exinfor.jsp";

	m["6"] = "/customer/news_list.jsp";
		m["61"] = "/customer/news_list.jsp";
		m["62"] = "/customer/faq.jsp";

	m["7"] = "/customer/sitemap.jsp";
		m["71"] = "/customer/sitemap.jsp";


//메인플래시링크

	m["sitemap"] = "/customer/sitemap.jsp";

	if(m[m_code]){
		//예외처리 - 그룹사 바로가기--> 새창띄우기
		if(m_code.substring(0,2)=="07"){
			var mv = window.open(m[m_code]);
		}
		//일반적인 경우
		else{
			document.location.href = m[m_code];
		}
	}



}





//********   path ************/
var menu1 = "";
var menu2 = "";
var menu3 = "";
//var menu4 = "";

function setPath(menu_id) {
		menu1 = new Number(menu_id.substring(0,2));
        menu2 = new Number(menu_id.substring(2,4));
        menu3 = new Number(menu_id.substring(4,6));
}

function pathCheck( menu1, menu2, menu3 ){

        var returnPram = ""
        var oneDepthName = new Array();
        var twoDepthName = new Array();
        var threeDepthName = new Array();
        var home = "<span class='home'><a href='/'>Home</a></span>";


		//******** Depth 1 ************
		oneDepthName['1'] = "<a href=javascript:page_link('1');>인재개발원 소개</a>";
		oneDepthName['2'] = "<a href=javascript:page_link('2');>교육과정 안내</a>";
		oneDepthName['3'] = "<a href=javascript:page_link('3');>시설/이용안내</a>";
		oneDepthName['4'] = "<a href=javascript:page_link('4');>동반성장 아카데미</a>";
		oneDepthName['5'] = "<a href=javascript:page_link('5');>롯데역사관</a>";
		oneDepthName['6'] = "<a href=javascript:page_link('6');>안내</a>";
		oneDepthName['7'] = "<a href=javascript:page_link('7');><span>사이트맵</a>";


		returnPram = home+oneDepthName[menu1];



		//******** Depth 2 ************
		//1.
		if(menu1 =="1"){
				twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('11');><span>인사말</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('12');><span>비전/미션</span></a>";
				twoDepthName[3] = "<a class='c_c5' href=javascript:page_link('13');><span>연혁</span></a>";
				twoDepthName[4] = "<a class='c_c5' href=javascript:page_link('14');><span>교육실적</span></a>";
				twoDepthName[5] = "<a href=javascript:page_link('15');><span>오시는길</span></a>";

				if(menu2 =="5"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('151');><span>오산캠퍼스</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('152');><span>용인캠퍼스</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('153');><span>서울캠퍼스</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				 }

				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];



		//2.
        }else if(menu1 =="2"){
				twoDepthName[0] = "<a href=javascript:page_link('20');><span>교육과정 안내</span></a>";
                twoDepthName[1] = "<a href=javascript:page_link('21');><span>주요 교육과정</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('22');><span>컨설팅</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('211');><span>오프라인 교육</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('212');><span>온라인 교육</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('213');><span>교육 일정</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "2")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('221');><span>프로세스</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('222');><span>프로그램</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}

				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

         }
		 //3.
		 else if(menu1 =="3"){
                twoDepthName[1] = "<a href=javascript:page_link('31');><span>오산캠퍼스</span></a>";
				twoDepthName[2] = "<a href=javascript:page_link('32');><span>용인캠퍼스</span></a>";
				twoDepthName[3] = "<a href=javascript:page_link('33');><span>서울캠퍼스</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('311');><span>시설안내</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('312');><span>생활안내</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('313');><span>이용안내</span></a>";
					//threeDepthName[4] = "<a class='c_c5' href=javascript:page_link('314');><span>이용요금</span></a>";
					//threeDepthName[5] = "<a class='c_c5' href=javascript:page_link('315');><span>견적내기</span></a>";
					//threeDepthName[6] = "<a class='c_c5' href=javascript:page_link('316');><span>이용신청서</span></a>";
					threeDepthName[7] = "<a class='c_c5' href=javascript:page_link('317');><span>오시는 길</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "2")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('321');><span>시설안내</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('322');><span>생활안내</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('323');><span>이용안내</span></a>";
					//threeDepthName[4] = "<a class='c_c5' href=javascript:page_link('324');><span>견적내기</span></a>";
					//threeDepthName[5] = "<a class='c_c5' href=javascript:page_link('325');><span>이용신청서</span></a>";
					//threeDepthName[6] = "<a class='c_c5' href=javascript:page_link('326');><span>오시는 길</span></a>";
					threeDepthName[7] = "<a class='c_c5' href=javascript:page_link('327');><span>오시는 길</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "3")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('331');><span>시설안내</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('332');><span>이용안내</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('333');><span>오시는 길</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}


				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }
		//4.
		else if(menu1 =="4"){
 			   twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('41');><span>소개</span></a>";
			   twoDepthName[2] = "<a href=javascript:page_link('42');><span>교육과정</span></a>";

			   if(menu2 =="2"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('421');><span>오프라인 교육</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('422');><span>온라인 교육</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
                returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];
		}
		 //5.
		 else if(menu1 =="5"){
                twoDepthName[1] = "<a class='' href=javascript:page_link('51');><span>롯데역사관 소개</span></a>";
				twoDepthName[2] = "<a class='' href=javascript:page_link('52');><span>견학안내</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('511');><span>롯데역사관이란</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('512');><span>시설안내</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				if(menu2 =="2"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('521');><span>견학안내</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}

 				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }

		 //6.
		 else if(menu1 =="6"){
                twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('61');><span>인재개발원 소식</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('62');><span>FAQ</span></a>";

 				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }

		 //7.
		 else if(menu1 =="7"){
                twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('71');><span>사이트맵</span></a>";



 				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }

				return returnPram ;

		}

function nowPath(){
        var zoneFront ="";
        var zoneBack ="";
        zoneFront="";
        zoneBack="";

        document.write(zoneFront + pathCheck( menu1, menu2, menu3 ) + zoneBack);
}





