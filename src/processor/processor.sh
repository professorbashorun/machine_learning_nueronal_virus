#/usr/bin/sh!

DEVELOPMENT='development';
PRODUCTION='production';
TEST='test'





#  --processor='processor' --env='development' --test='true|false' --funct='predict'
#  --input=address|file_path




if [ $env = DEVELOPMENT && $test = false ];
then
python
import $processor as processor;
processor.$funct($input,$output);


elif [ $env = PRODUCTION && $test = false];
then
./$processpr --funct=$funct --input=$input --output=$output


elif [ $env = DEVELOPMENT && $test = true ];
then
processor=$processor\_test
import $processor


elif [ $env = PRODUCTION && $test= true ];
then
processor=$processor\_test
./$processpr --funct=$funct --input=$input --output=$output
fi





