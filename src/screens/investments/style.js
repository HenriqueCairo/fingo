import styled from "styled-components/native"


const Container = styled.View`
    flex: 1;

    background-color: #F4FFF1;
`


const Header = styled.View`
    width: 100%;
    height: 48px;

    background-color: #FFFFFF;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 14px;

    border-bottom-width: 1px;
    border-bottom-color: #E5EEE5;
`


const HeaderLeft = styled.View`
    flex-direction: row;
    align-items: center;
`


const Avatar = styled.Text`
    color: #00863F;

    font-size: 16px;

    margin-right: 6px;
`


const Logo = styled.Text`
    color: #00863F;

    font-size: 12px;

    font-weight: bold;
`


const Points = styled.Text`
    color: #D29A00;

    font-size: 9px;

    background-color: #FFF5D2;

    padding: 4px 7px;

    border-radius: 10px;
`


const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 100
    },
    showsVerticalScrollIndicator: false
})`
    flex: 1;

    padding: 18px;
`


const SectionLabel = styled.Text`
    color: #777777;

    font-size: 8px;

    font-weight: bold;

    text-align: center;

    margin-top: 4px;
`


const Balance = styled.Text`
    color: #00863F;

    font-size: 27px;

    font-weight: bold;

    text-align: center;

    margin-top: 5px;
`


const Profit = styled.Text`
    color: #28A65A;

    font-size: 8px;

    text-align: center;

    margin-top: 5px;
    margin-bottom: 18px;
`


const ChartCard = styled.View`
    width: 100%;

    height: 175px;

    background-color: #FFFFFF;

    border-radius: 8px;

    padding: 12px;

    border-width: 1px;
    border-color: #E4EEE4;

    margin-bottom: 18px;
`


const ChartHeader = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


const ChartTitle = styled.Text`
    color: #333333;

    font-size: 10px;

    font-weight: bold;
`


const PeriodButton = styled.TouchableOpacity`
    background-color: #F2F7F2;

    border-radius: 5px;

    padding: 4px 8px;
`


const PeriodText = styled.Text`
    color: #777777;

    font-size: 7px;
`


const ChartArea = styled.View`
    flex: 1;

    position: relative;

    justify-content: flex-end;

    margin-top: 15px;

    border-bottom-width: 1px;
    border-bottom-color: #E9EFE9;
`


const ChartLine = styled.View`
    position: absolute;

    width: 100%;
    height: 3px;

    background-color: #00863F;

    bottom: 42px;

    transform: rotate(-12deg);
`


const ChartPoint = styled.View`
    position: absolute;

    right: 0;
    bottom: 68px;

    width: 8px;
    height: 8px;

    border-radius: 4px;

    background-color: #00863F;
`


const InvestmentTitle = styled.Text`
    color: #333333;

    font-size: 10px;

    font-weight: bold;

    margin-bottom: 8px;
`


const InvestmentCard = styled.View`
    width: 100%;

    min-height: 58px;

    background-color: #FFFFFF;

    border-radius: 8px;

    border-width: 1px;
    border-color: #E3ECE3;

    flex-direction: row;
    align-items: center;

    padding: 10px;

    margin-bottom: 14px;
`


const InvestmentIcon = styled.Text`
    width: 32px;
    height: 32px;

    border-radius: 16px;

    background-color: #E8F1FF;

    color: #4972B8;

    text-align: center;
    line-height: 32px;

    font-size: 13px;

    margin-right: 9px;
`


const InvestmentInfo = styled.View`
    flex: 1;
`


const InvestmentName = styled.Text`
    color: #333333;

    font-size: 9px;

    font-weight: bold;
`


const InvestmentSubtitle = styled.Text`
    color: #888888;

    font-size: 7px;

    margin-top: 3px;
`


const InvestmentValue = styled.Text`
    color: #333333;

    font-size: 8px;

    font-weight: bold;
`


const InvestmentProfit = styled.Text`
    color: #00863F;

    font-size: 7px;

    margin-left: 6px;
`


const NewsCard = styled.View`
    width: 100%;

    background-color: #EAF7E8;

    border-radius: 8px;

    border-width: 1px;
    border-color: #D3EAD2;

    padding: 13px;

    margin-bottom: 15px;
`


const NewsTitle = styled.Text`
    color: #555555;

    font-size: 9px;

    font-weight: bold;

    margin-bottom: 9px;
`


const NewsText = styled.Text`
    color: #555555;

    font-size: 8px;

    line-height: 13px;

    margin-bottom: 9px;
`


const NewsHighlight = styled.View`
    width: 100%;

    background-color: #DDF1DC;

    border-radius: 5px;

    padding: 9px;

    margin-top: 3px;
`


const NewsHighlightText = styled.Text`
    color: #446044;

    font-size: 7px;

    line-height: 11px;

    font-weight: 500;
`


const InvestButton = styled.TouchableOpacity`
    width: 100%;

    height: 38px;

    background-color: #00863F;

    border-radius: 7px;

    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
`


const InvestButtonText = styled.Text`
    color: #FFFFFF;

    font-size: 9px;

    font-weight: bold;
`


const BottomMenu = styled.View`
    width: 100%;
    height: 62px;

    background-color: #FFFFFF;

    position: absolute;

    bottom: 0;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    border-top-width: 1px;
    border-top-color: #EEEEEE;
`


const MenuItem = styled.TouchableOpacity`
    flex: 1;

    align-items: center;
    justify-content: center;
`


const MenuIcon = styled.Text`
    color: #8AA294;

    font-size: 14px;

    margin-bottom: 3px;
`


const MenuText = styled.Text`
    color: #809087;

    font-size: 7px;
`


const ActiveMenu = styled.TouchableOpacity`
    flex: 1;

    align-items: center;
    justify-content: center;
`


const ActiveIcon = styled.Text`
    width: 34px;
    height: 34px;

    border-radius: 17px;

    background-color: #00B950;

    color: #FFFFFF;

    font-size: 14px;

    text-align: center;
    line-height: 34px;

    margin-bottom: 2px;
`


export {
    Container,
    Header,
    HeaderLeft,
    Avatar,
    Logo,
    Points,
    Content,
    SectionLabel,
    Balance,
    Profit,
    ChartCard,
    ChartHeader,
    ChartTitle,
    PeriodButton,
    PeriodText,
    ChartArea,
    ChartLine,
    ChartPoint,
    InvestmentTitle,
    InvestmentCard,
    InvestmentIcon,
    InvestmentInfo,
    InvestmentName,
    InvestmentSubtitle,
    InvestmentValue,
    InvestmentProfit,
    NewsCard,
    NewsTitle,
    NewsText,
    NewsHighlight,
    NewsHighlightText,
    InvestButton,
    InvestButtonText,
    BottomMenu,
    MenuItem,
    MenuIcon,
    MenuText,
    ActiveMenu,
    ActiveIcon
}