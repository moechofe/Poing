import std.getopt;
import std.file;
import std.stdio;
import std.json;

string input;
string output;

void main(string[] args)
{
	getopt(args,
		"input|i", &input,
		"output|o", &output
	);

	auto data = readText(input);
	auto json = parseJSON(data);
	foreach(string k,
	writefln("test:%d",json["test"].integer);
}

