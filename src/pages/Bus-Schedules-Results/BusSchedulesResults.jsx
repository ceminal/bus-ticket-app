import { useSelector } from "react-redux";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import "./BusSchedulesResults.scss";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const BusSchedulesResults = () => {
  const filteredTickets = useSelector((state) => state.tickets.filteredTickets);

  return (
    <>
      <Header backgroundColor="#222222"/>
      <div className="ticketResults">
        <h2>Biletler</h2>
        {filteredTickets.map((ticket, index) => (
          <Card sx={{ maxWidth: 750, marginBottom: 2 }} key={index}>
            <CardActionArea>
              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image={ticket.image}
                  alt="pamukkale"
                  sx={{ float: "left", marginRight: "1rem" }}
                />
              </div>
              <CardContent>
                <div className="cardContentCities">
                  <div className="cardDetails">
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      <strong>{ticket.starttime}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "1rem" }}
                    >
                      <strong>{ticket.start}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {ticket.startcity}
                    </Typography>
                  </div>
                  <div>
                    <svg
                      className="t-1gxyarb-DCLocation-arrow t-t4yyVf-DCLocation-arrow-ref"
                      width="36"
                      height="100%"
                      viewBox="0 0 36 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.3431 0L35.7071 5.29396C36.0976 5.68448 36.0976 6.31765 35.7071 6.70817L30.3431 12L29 10.6579L32.66 7.00107H18V5.00107H32.66L29 1.34421L30.3431 0ZM2 5H0V7H2V5ZM4 5H8V7H4V5ZM16 5H10V7H16V5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>

                  <div className="cardDetails">
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      <strong>{ticket.arrivetime}</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "1rem" }}
                    >
                      <strong>{ticket.end} </strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {ticket.endcity}
                    </Typography>
                  </div>
                </div>
                <div className="cardPrice">
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "1.5rem" }}
                  >
                    {ticket.price}₺
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BusSchedulesResults;
