import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosArrowForward } from "react-icons/io";

import "./Accordion.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<IoIosArrowForward sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='accordionMain'>
      <h1>Sıkça Sorulan Sorular (SSS)</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Nasıl otobüs bileti satın alabilirim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Web sitemizde bilet satın alma işlemi çok basittir. Anasayfada bulunan "Bilet Ara" bölümüne tıklayarak seyahat etmek istediğiniz güzergahı, tarih ve saat seçeneklerini girin. Ardından size uygun seferleri listeleyin ve "Satın Al" butonuna tıklayarak rezervasyon işleminizi tamamlayın.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Biletlerimi nasıl iptal edebilirim veya değiştirebilirim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Biletlerinizi, satın alma işleminizden sonra "Biletlerim" bölümünden iptal edebilir veya değiştirebilirsiniz. İptal ve değişiklik koşulları bilet türüne göre değişiklik gösterebilir. Detaylı bilgi için "İptal ve Değişiklik Kuralları" sayfamızı ziyaret ediniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Ödeme yöntemleri nelerdir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Kredi kartı, banka kartı, internet bankacılığı ve bazı mobil ödeme yöntemleri gibi çeşitli ödeme seçenekleri sunmaktayız. Güvenli ödeme sayfamızda, tercih ettiğiniz ödeme yöntemini seçerek işleminizi hızlıca tamamlayabilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Biletimi nasıl alırım?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bilet satın alma işleminiz tamamlandığında, e-biletiniz e-posta adresinize ve mobil cihazınıza SMS ile gönderilecektir. Bileti yazdırmanıza gerek yoktur; seyahat gününde kimliğiniz ve e-biletinizin elektronik ya da basılı bir kopyası ile otobüse binebilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Otobüs seferleri ve saatleri hakkında nereden bilgi alabilirim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Otobüs seferleri ve saatleri hakkındaki en güncel bilgilere web sitemizin "Seferler" bölümünden ulaşabilirsiniz. Ayrıca, belirli bir güzergah hakkında detaylı bilgi almak için arama çubuğunu kullanabilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Bilet fiyatları nasıl belirleniyor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bilet fiyatları, seyahat tarihi, güzergah uzunluğu, otobüs firmasının fiyat politikası ve talebe göre değişiklik gösterebilir. Erken rezervasyon yapmak genellikle daha uygun fiyatlar bulmanıza yardımcı olur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Kaybolan eşyalar için ne yapmalıyım?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Kaybolan eşyalarınız için lütfen otobüs firması ile doğrudan iletişime geçin. İletişim bilgilerine web sitemizin "İletişim" bölümünden ulaşabilirsiniz. Ayrıca, kayıp eşya bildirim formumuzu doldurarak da bizimle iletişime geçebilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}