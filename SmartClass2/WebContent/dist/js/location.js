//��ũ  - javascript:page_link('1');
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
		m["32"] = "/use_guide/mabook_guide.jsp?#1";	//���ο�����
			m["321"] = "/use_guide/mabook_guide.jsp?#1";	//�ü��ȳ� "/use_guide/m_facilities_guide.jsp";
			m["322"] = "/use_guide/yongIn_life_guide.jsp";	//��Ȱ�ȳ� javascript:alert('�غ����Դϴ�')
			m["323"] = "/use_guide/use_step_ma.jsp";	//"�̿�ȳ� /use_guide/use_mabook_step.jsp";
			m["324"] = "/use_guide/use_charge_ma.jsp";	//�̿���
			m["325"] = "/use_guide/yongIn_estimate_calcurate.jsp";	//��������
			m["326"] = "/use_guide/use_apform_ma.jsp";	//�̿��û��
			m["327"] = "/use_guide/yongin_map.jsp";	//"���ô±�
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


//�����÷��ø�ũ

	m["sitemap"] = "/customer/sitemap.jsp";

	if(m[m_code]){
		//����ó�� - �׷�� �ٷΰ���--> ��â����
		if(m_code.substring(0,2)=="07"){
			var mv = window.open(m[m_code]);
		}
		//�Ϲ����� ���
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
		oneDepthName['1'] = "<a href=javascript:page_link('1');>���簳�߿� �Ұ�</a>";
		oneDepthName['2'] = "<a href=javascript:page_link('2');>�������� �ȳ�</a>";
		oneDepthName['3'] = "<a href=javascript:page_link('3');>�ü�/�̿�ȳ�</a>";
		oneDepthName['4'] = "<a href=javascript:page_link('4');>���ݼ��� ��ī����</a>";
		oneDepthName['5'] = "<a href=javascript:page_link('5');>�Ե������</a>";
		oneDepthName['6'] = "<a href=javascript:page_link('6');>�ȳ�</a>";
		oneDepthName['7'] = "<a href=javascript:page_link('7');><span>����Ʈ��</a>";


		returnPram = home+oneDepthName[menu1];



		//******** Depth 2 ************
		//1.
		if(menu1 =="1"){
				twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('11');><span>�λ縻</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('12');><span>����/�̼�</span></a>";
				twoDepthName[3] = "<a class='c_c5' href=javascript:page_link('13');><span>����</span></a>";
				twoDepthName[4] = "<a class='c_c5' href=javascript:page_link('14');><span>��������</span></a>";
				twoDepthName[5] = "<a href=javascript:page_link('15');><span>���ô±�</span></a>";

				if(menu2 =="5"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('151');><span>����ķ�۽�</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('152');><span>����ķ�۽�</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('153');><span>����ķ�۽�</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				 }

				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];



		//2.
        }else if(menu1 =="2"){
				twoDepthName[0] = "<a href=javascript:page_link('20');><span>�������� �ȳ�</span></a>";
                twoDepthName[1] = "<a href=javascript:page_link('21');><span>�ֿ� ��������</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('22');><span>������</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('211');><span>�������� ����</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('212');><span>�¶��� ����</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('213');><span>���� ����</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "2")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('221');><span>���μ���</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('222');><span>���α׷�</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}

				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

         }
		 //3.
		 else if(menu1 =="3"){
                twoDepthName[1] = "<a href=javascript:page_link('31');><span>����ķ�۽�</span></a>";
				twoDepthName[2] = "<a href=javascript:page_link('32');><span>����ķ�۽�</span></a>";
				twoDepthName[3] = "<a href=javascript:page_link('33');><span>����ķ�۽�</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('311');><span>�ü��ȳ�</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('312');><span>��Ȱ�ȳ�</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('313');><span>�̿�ȳ�</span></a>";
					//threeDepthName[4] = "<a class='c_c5' href=javascript:page_link('314');><span>�̿���</span></a>";
					//threeDepthName[5] = "<a class='c_c5' href=javascript:page_link('315');><span>��������</span></a>";
					//threeDepthName[6] = "<a class='c_c5' href=javascript:page_link('316');><span>�̿��û��</span></a>";
					threeDepthName[7] = "<a class='c_c5' href=javascript:page_link('317');><span>���ô� ��</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "2")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('321');><span>�ü��ȳ�</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('322');><span>��Ȱ�ȳ�</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('323');><span>�̿�ȳ�</span></a>";
					//threeDepthName[4] = "<a class='c_c5' href=javascript:page_link('324');><span>��������</span></a>";
					//threeDepthName[5] = "<a class='c_c5' href=javascript:page_link('325');><span>�̿��û��</span></a>";
					//threeDepthName[6] = "<a class='c_c5' href=javascript:page_link('326');><span>���ô� ��</span></a>";
					threeDepthName[7] = "<a class='c_c5' href=javascript:page_link('327');><span>���ô� ��</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				else if (menu2 == "3")
				{
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('331');><span>�ü��ȳ�</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('332');><span>�̿�ȳ�</span></a>";
					threeDepthName[3] = "<a class='c_c5' href=javascript:page_link('333');><span>���ô� ��</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}


				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }
		//4.
		else if(menu1 =="4"){
 			   twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('41');><span>�Ұ�</span></a>";
			   twoDepthName[2] = "<a href=javascript:page_link('42');><span>��������</span></a>";

			   if(menu2 =="2"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('421');><span>�������� ����</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('422');><span>�¶��� ����</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
                returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];
		}
		 //5.
		 else if(menu1 =="5"){
                twoDepthName[1] = "<a class='' href=javascript:page_link('51');><span>�Ե������ �Ұ�</span></a>";
				twoDepthName[2] = "<a class='' href=javascript:page_link('52');><span>���оȳ�</span></a>";

				if(menu2 =="1"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('511');><span>�Ե�������̶�</span></a>";
					threeDepthName[2] = "<a class='c_c5' href=javascript:page_link('512');><span>�ü��ȳ�</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}
				if(menu2 =="2"){
					threeDepthName[1] = "<a class='c_c5' href=javascript:page_link('521');><span>���оȳ�</span></a>";
					returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2]+" "+threeDepthName[menu3];
					return returnPram;
				}

 				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }

		 //6.
		 else if(menu1 =="6"){
                twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('61');><span>���簳�߿� �ҽ�</span></a>";
				twoDepthName[2] = "<a class='c_c5' href=javascript:page_link('62');><span>FAQ</span></a>";

 				returnPram = home+" "+oneDepthName[menu1]+" "+twoDepthName[menu2];

        }

		 //7.
		 else if(menu1 =="7"){
                twoDepthName[1] = "<a class='c_c5' href=javascript:page_link('71');><span>����Ʈ��</span></a>";



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





