
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
from pandas.io.data import DataReader

# 컬럼이름바꾸기
code_names = {
    '005930.KS':'Samsung Elec', '005380.KS':'Hyundai Motor','000660.KS':'SK Hynix', '015760.KS':'kor elect',
    '012330.KS':'Hyundai Mobis', '005490.KS':'POSCO', '017670.KS':'SK tele','^KS11':'KOSPI',
    '035420.KS':'NAVER','055550.KS':'sinhan','032830.KS':'samsung life', '000270.KS':'Kia', '090430.KS':'AmoreF',
    '090430.KS':'LG chemi','105560.KS':'KB','000810.KS':'samsung fire', '034220.KS':'LG display', '033780.KS':'KT&G',
    '051900.KS':'LG health','003550.KS':'LG','034730.KS':'SK cnc', '066570.KS':'LG elec', '002790.KS':'AmoreG',
    '009540.KS':'Samsung shi','006400.KS':'Samsung SDI','086280.KS':'Hy globis', '096770.KS':'SK ino', '000830.KS':'Samsung c&t'}

df = DataReader(code_names.keys(), 'yahoo', start='2014-03-01', end='2015-02-28')

df = df['Adj Close']
df = df.rename(columns=code_names)

changes = df.pct_change()
chg_corr = changes.corr()
chg_corr

plt.figure(figsize=(16,8))
plt.scatter(changes.mean(), changes.std())
plt.xlabel('returns')
plt.ylabel('risk')

for label, x, y in zip(changes.columns, changes.mean(), changes.std()):
    plt.annotate( label,xy=(x, y), xytext=(30, -30),
                  textcoords = 'offset points', ha = 'right', va = 'bottom',
                  bbox = dict(boxstyle = 'round,pad=0.5', fc = 'yellow', alpha = 0.5),
                  arrowprops = dict(arrowstyle = '->', connectionstyle = 'arc3,rad=0'))
