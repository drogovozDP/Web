#include<iostream>
#include<ctime>
#include"BigInt.h"
#include"Rsa.h"
using std::cout;
using std::endl;
using std::cin;

void menu()
{//�˵���ʾ����
	cout<<"==========Welcome to use RSA encoder=========="<<endl;
	cout<<"               e.encrypt ����              "<<endl;
	cout<<"               d.decrypt ����              "<<endl;
	cout<<"               s.setkey ����               "<<endl;
	cout<<"               p.print ��ʾ               "<<endl;
	cout<<"               q.quit �˳�                 "<<endl;
	cout<<"input your choice:"<<endl;
}

bool islegal(const string& str)
{//�ж������Ƿ�Ϸ�
	for(string::const_iterator it=str.begin();it!=str.end();++it)
		if(!isalnum(*it))//������ĸ����
			return false;
	return true;
}

bool decode(Rsa& rsa)
{//����
	string str;
	do
	{
		cout<<">����16��������:";
		cin>>str;
	}while(cin && str.length()<1);
	if(!cin || islegal(str)==false)
		return false;
	BigInt c(str);
	
	long t1=clock();
	BigInt m=rsa.decodeByPr(c);
	long t2=clock();
	cout<<"��ʱ:"<<(t2-t1)<<"ms."<<endl;

	cout<<"����:"<<c<<endl
		<<"����:"<<m<<endl;
	return true;
}

bool encry(Rsa& rsa,BigInt& c)
{//����
	string str;
	do
	{
		cout<<">����16��������:";
		cin>>str;
	}while(cin && str.length()<1);
	if(!cin || islegal(str)==false)
		return false;
	BigInt m(str);

	c=rsa.encryptByPu(m);

	cout<<"����:"<<m<<endl
		<<"����:"<<c<<endl;
	return true;
}

void print(Rsa& rsa)
{//���
	cout<<rsa<<endl;
}

void init(Rsa& rsa,int n)
{//��ʼ��

	cout<<"��ʼ��...."<<endl;
	long t1=clock();
	rsa.init(n);
	long t2=clock();
	cout<<"��ʼ�����."<<endl;
	cout<<"��ʱ:"<<(t2-t1)/1000<<"s."<<endl;
}

int go()
{//���ƺ���
	char ch;
	string str;
	Rsa rsa;
	BigInt c,m;
	cout<<"����λ��:";
	int n;
	cin>>n;
	init(rsa,n/2);

	while(true)
	{
		menu();//�˵���ʾ
		cout<<">";
		cin>>str;
		if(!cin)
			return 0;
		
		if(str.length()<1)
			cout<<"��������"<<endl;
		else
		{
			ch=str.at(0);
			switch(ch)
			{
			case 'e':
			case 'E':
				encry(rsa,c);//����
				break;
			case 'd':
			case 'D':
				decode(rsa);//����
				break;
			case 's':
			case 'S':
				go();//���¿�ʼ��ʼ
				break;
			case 'p':
			case 'P':
				print(rsa);//�����˽Կ��Ϣ
				break;
			case 'q':
			case 'Q':
				return 0;
			}
		}
	}
}


int main()
{
	go();
}