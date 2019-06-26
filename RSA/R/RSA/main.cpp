#include<iostream>
#include<ctime>
#include"BigInt.h"
#include"Rsa.h"
#include<fstream>
#include<stdlib.h>

using std::cout;
using std::endl;
using std::cin;

void menu()
{
	cout<<"==========Welcome to use RSA encoder=========="<<endl;
	cout<<"               e = encrypt             "<<endl;
	cout<<"               d = decrypt             "<<endl;
	cout<<"               s = setkey              "<<endl;
	cout<<"               p = print              "<<endl;
	cout<<"               q = quit                 "<<endl;
	cout<<"Input your choice:"<<endl;
}

bool islegal(const string& str)
{
	for(string::const_iterator it=str.begin();it!=str.end();++it)
		if(!isalnum(*it))
			return false;
	return true;
}

bool decode(Rsa& rsa)
{
	std::ifstream input("decoding.txt");
	std::ofstream output("decoded.txt");
	string str;
	do
	{
		cout << "Reading input.." << endl;
		//cout<<"Your cipher:";
		input>>str;
	}
	while(input && str.length()<1);
	if(!input || islegal(str)==false)
		return false;
	BigInt c(str);
	cout << "Finished reading." << endl;
	cout << "Decoding..." << endl;
	long t1=clock();
	BigInt m=rsa.decodeByPr(c);
	long t2=clock();

	cout << "Finished decoding." << endl;

	cout<<"Time:"<<(t2-t1)<<"ms."<<endl;

	output<<"Cipher:"<<c<<endl<<"Default string:"<<m<<endl;
	return true;
}

bool encry(Rsa& rsa,BigInt& c)
{
	std::ifstream input("input.txt");
	std::ofstream output("decoding.txt");
	string str;
	do
	{
		//cout<<">Your string you want to encrypt:";
		cout << "Reading input.." << endl;
		input>>str;
	}while(input && str.length()<1);
	if(!input || islegal(str)==false)
		return false;
	BigInt m(str);

	cout << "Finished reading." << endl;
	cout << "Encrypting..." << endl;
	c=rsa.encryptByPu(m);

	cout << "Finished encrypting." << endl;

	output<</*"Default string:"<<m<<endl<<"Cipher:"<<*/c/*<<endl*/;
	return true;
}

void print(Rsa& rsa)
{
	cout<<rsa<<endl;
}

void init(Rsa& rsa,int n)
{

	cout<<"Initializing...."<<endl;
	long t1=clock();
	rsa.init(n);
	long t2=clock();
	cout<<"Complete."<<endl;
	cout<<"Time:"<<(t2-t1)/1000<<"s."<<endl;
}

int go()
{
	char ch;
	string str;
	Rsa rsa;
	BigInt c,m;
	cout<<"Bytes for keys:";
	int n;
	cin>>n;
	init(rsa,n/2);

	while(true)
	{
		menu();
		cin>>str;
		if(!cin)
			return 0;
		
		if(str.length()<1)
			cout<<"Wrong input"<<endl;
		else
		{
			ch=str.at(0);
			switch(ch)
			{
			case 'e':
			case 'E':
				encry(rsa,c);
				break;
			case 'd':
			case 'D':
				decode(rsa);
				break;
			case 's':
			case 'S':
				go();
				break;
			case 'p':
			case 'P':
				print(rsa);
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