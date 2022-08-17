import { ArrowLeft, CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Content, ContentInfo, DeliverySendContainer, InfoIcons, ReturnButton } from "./styles"
import Image from '../../assets/delivery.png'
export const DeliverySend = ()=>{
    return(
        <DeliverySendContainer>
            <div>
                <strong>Uhu! Pedido confirmado</strong>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <Content>
            <ContentInfo>
                <div>
                <InfoIcons backgroundColor="purple">
                    <MapPin size={16} weight="fill"/>
                </InfoIcons>
                <p>Entrega em <b>{`${"Rua João Daniel Martinelli, 102"}`}</b><br/>
                {`${"Farrapos"} - ${"Porto Alegre"}, ${"RS"}`}</p>
                </div>
                <div>
                    <InfoIcons backgroundColor="yellow">
                        <Timer size={16} weight="fill"/>
                    </InfoIcons>
                    <p> Previsão de entrega<br/><b>20 min - 30 min </b></p>
                </div>
                <div>
                    <InfoIcons backgroundColor="brown">
                        <CurrencyDollar size={16} />
                    </InfoIcons>
                    <p> Pagamento na entrega<br/><b>{`${"Cartão de Crédito"}`}</b></p>
                </div>
            </ContentInfo>
            <img src={Image} alt="" />
            </Content>
            <ReturnButton><ArrowLeft size={24}/>Voltar para a Loja</ReturnButton>
        </DeliverySendContainer>
    )
}