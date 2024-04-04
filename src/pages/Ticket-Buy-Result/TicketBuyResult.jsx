import MultiActionAreaCard from "./Bus-Ticket-Card";
import "./TicketBuyResult.scss";

const TicketBuyResult = () => {
  return (
    <div className="ticket-buy-result">
      <img src="./confirm.png" alt="" />
      <h2>
        Tebrikler!
        <br />
        Bilet alma işlemini başarıyla tamamladınız.
      </h2>

      <MultiActionAreaCard />
    </div>
  );
};

export default TicketBuyResult;
