import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import "./App.css";
import { format } from "date-fns";

const styleInput = { mt: 2 };

const governorates = [
  { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
  { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
  {
    id: "3",
    governorate_name_ar: "الأسكندرية",
    governorate_name_en: "Alexandria",
  },
  { id: "4", governorate_name_ar: "الدقهلية", governorate_name_en: "Dakahlia" },
  {
    id: "5",
    governorate_name_ar: "البحر الأحمر",
    governorate_name_en: "Red Sea",
  },
  { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
  { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
  { id: "8", governorate_name_ar: "الغربية", governorate_name_en: "Gharbiya" },
  {
    id: "9",
    governorate_name_ar: "الإسماعلية",
    governorate_name_en: "Ismailia",
  },
  { id: "10", governorate_name_ar: "المنوفية", governorate_name_en: "Menofia" },
  { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
  {
    id: "12",
    governorate_name_ar: "القليوبية",
    governorate_name_en: "Qaliubiya",
  },
  {
    id: "13",
    governorate_name_ar: "الوادي الجديد",
    governorate_name_en: "New Valley",
  },
  { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
  { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
  { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
  {
    id: "17",
    governorate_name_ar: "بني سويف",
    governorate_name_en: "Beni Suef",
  },
  {
    id: "18",
    governorate_name_ar: "بورسعيد",
    governorate_name_en: "Port Said",
  },
  { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
  { id: "20", governorate_name_ar: "الشرقية", governorate_name_en: "Sharkia" },
  {
    id: "21",
    governorate_name_ar: "جنوب سيناء",
    governorate_name_en: "South Sinai",
  },
  {
    id: "22",
    governorate_name_ar: "كفر الشيخ",
    governorate_name_en: "Kafr Al sheikh",
  },
  { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
  { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
  { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
  {
    id: "26",
    governorate_name_ar: "شمال سيناء",
    governorate_name_en: "North Sinai",
  },
  { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
];

function App() {
  const [data, setData] = React.useState({
    chainNum: "",
    name: "",
    cargo: "",
    trailerNum: "",
    carNum: "",
    governorate: "",
    firstWeight: "",
    firstDate: null,
    firstTime: null,
    secondWeight: "",
    secondDate: null,
    secondTime: null,
    net: "",
    client: "",
  });

  const handleChange = (value: string | null | Date, type: string) => {
    setData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
    if (["firstWeight", "secondWeight"].includes(type))
      setData((prevData) => ({
        ...prevData,
        net: netCalcHandelr(prevData.firstWeight, prevData.secondWeight),
      }));
  };

  const netCalcHandelr = (firstWeight: string, secondWeight: string) => {
    const net = Math.abs(
      parseFloat(firstWeight ? firstWeight : "0") -
        parseFloat(secondWeight ? secondWeight : "0")
    );
    return `${net}`;
  };

  const printHandler = (e: React.FormEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <>
      <div className="App noPrint" dir="rtl">
        <Container maxWidth="sm">
          <h2>مــــيــــزان بــــســــكــــول الــــيــــرمــــوك</h2>
          <p>دشطوط مركز سمسطا محافظة بني سويف طريق دشطوط سمسطا بجوار البرية</p>
          <p>ت:01014822248</p>
          <form onSubmit={printHandler}>
            <p className="label">معلومات :</p>
            <TextField
              fullWidth
              required
              // sx={styleInput}
              id="filled-basic"
              label="رقم المسلسل"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.chainNum}
              onChange={(e) => handleChange(e.target.value, "chainNum")}
            />
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-basic"
              label="اسم السائق"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.name}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-basic"
              label="اسم العميل"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.client}
              onChange={(e) => handleChange(e.target.value, "client")}
            />
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-basic"
              label="الحمولة"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.cargo}
              onChange={(e) => handleChange(e.target.value, "cargo")}
            />
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-basic"
              label="رقم المقطورة"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.trailerNum}
              onChange={(e) => handleChange(e.target.value, "trailerNum")}
            />
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-basic"
              label="رقم السيارة"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.carNum}
              onChange={(e) => handleChange(e.target.value, "carNum")}
            />

            <FormControl fullWidth sx={styleInput} required variant="filled">
              <InputLabel
                id="demo-simple-select-label"
                sx={{ fontFamily: "Vazirmatn, sans-serif" }}
              >
                المحافظة
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.governorate}
                label="المحافظة"
                onChange={(e) => handleChange(e.target.value, "governorate")}
                sx={{
                  textAlign: "left",
                  fontFamily: "Vazirmatn, sans-serif",
                }}
              >
                {governorates.map((governorate) => (
                  <MenuItem
                    sx={{
                      direction: "rtf",
                      fontFamily: "Vazirmatn, sans-serif",
                    }}
                    key={governorate.id}
                    value={governorate.governorate_name_ar}
                  >
                    {governorate.governorate_name_ar}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <p className="label">الوزنة الأولى :</p>
            <TextField
              fullWidth
              required
              // sx={styleInput}
              id="filled-basic"
              label="الوزن"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.firstWeight}
              onChange={(e) => handleChange(e.target.value, "firstWeight")}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="تاريخ الأولى"
                value={data.firstDate}
                onChange={(e) => handleChange(e, "firstDate")}
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{
                      style: { fontFamily: "Vazirmatn, sans-serif" },
                    }}
                    fullWidth
                    variant="filled"
                    sx={styleInput}
                    required
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="وقت الأولى"
                value={data.firstTime}
                onChange={(e) => handleChange(e, "firstTime")}
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{
                      style: { fontFamily: "Vazirmatn, sans-serif" },
                    }}
                    fullWidth
                    variant="filled"
                    sx={styleInput}
                    required
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <p className="label">الوزنة الثانية :</p>
            <TextField
              fullWidth
              required
              // sx={styleInput}
              id="filled-basic"
              label="الوزن"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              value={data.secondWeight}
              onChange={(e) => handleChange(e.target.value, "secondWeight")}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="تاريخ الثانية"
                value={data.secondDate}
                onChange={(e) => handleChange(e, "secondDate")}
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{
                      style: { fontFamily: "Vazirmatn, sans-serif" },
                    }}
                    fullWidth
                    variant="filled"
                    sx={styleInput}
                    required
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="وقت الثانية"
                value={data.secondTime}
                onChange={(e) => handleChange(e, "secondTime")}
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{
                      style: { fontFamily: "Vazirmatn, sans-serif" },
                    }}
                    fullWidth
                    variant="filled"
                    sx={styleInput}
                    required
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              fullWidth
              required
              sx={styleInput}
              id="filled-read-only-input"
              label="الصافي"
              variant="filled"
              InputLabelProps={{
                style: { fontFamily: "Vazirmatn, sans-serif" },
              }}
              inputProps={{
                readOnly: true,
                style: {
                  fontFamily: "Vazirmatn, sans-serif",
                },
              }}
              value={data.net}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontFamily: "Vazirmatn, sans-serif",
                fontWeight: 700,
                fontSize: 18,
              }}
              size="large"
            >
              طبع
            </Button>
          </form>
        </Container>
      </div>

      <div
        className="noScreen"
        style={{
          width: "100%",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h2>مــــيــــزان بــــســــكــــول الــــيــــرمــــوك</h2>
        <p>
          دشطوط مركز سمسطا محافظة بني سويف طريق دشطوط سمسطا بجوار البرية
          ت:01014822248
        </p>
        <hr style={{ borderWidth: "2px", borderStyle: "dashed" }} />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th style={{ border: "1px solid" }}>رقم المسلسل</th>
              <td colSpan={3} style={{ border: "1px solid" }}>
                {data.chainNum}
              </td>
              <td colSpan={2}>الوزن الفارغ بمعرفة السائق</td>
            </tr>
            <tr>
              <th style={{ border: "1px solid" }}>اسم العميل</th>
              <td style={{ border: "1px solid" }} colSpan={3}>
                {data.client}
              </td>
              <th style={{ border: "1px solid" }}>اسم السائق</th>
              <td style={{ border: "1px solid" }}>{data.name}</td>
            </tr>
            <tr>
              <th style={{ border: "1px solid" }}>الحمولة</th>
              <td style={{ border: "1px solid" }} colSpan={3}>
                {data.cargo}
              </td>
              <th style={{ border: "1px solid" }}>رقم المقطورة</th>
              <td style={{ border: "1px solid" }}>{data.trailerNum}</td>
            </tr>

            <tr>
              <th style={{ border: "1px solid" }}>رقم السيارة</th>
              <td style={{ border: "1px solid" }} colSpan={3}>
                {data.carNum}
              </td>
            </tr>

            <tr>
              <th style={{ border: "1px solid" }}>المحافظة </th>
              <td style={{ border: "1px solid" }} colSpan={3}>
                {data.governorate}
              </td>
            </tr>

            <tr>
              <th style={{ border: "1px solid" }}>الوزنة الأولى</th>
              <td style={{ border: "1px solid" }}>{data.firstWeight}</td>
              <th style={{ border: "1px solid" }}>تاريخ الأولى</th>
              <td style={{ border: "1px solid" }}>
                {data.firstDate &&
                  format(new Date(data.firstDate), "MM/dd/yyyy")}
              </td>
              <th style={{ border: "1px solid" }}>وقت الأولى</th>
              <td style={{ border: "1px solid" }}>
                {data.firstTime && format(new Date(data.firstTime), "H:m a")}
              </td>
            </tr>
            <tr>
              <th style={{ border: "1px solid" }}>الوزنة الثانية</th>
              <td style={{ border: "1px solid" }}>{data.secondWeight}</td>
              <th style={{ border: "1px solid" }}>تاريخ الثانية</th>
              <td style={{ border: "1px solid" }}>
                {data.secondDate &&
                  format(new Date(data.secondDate), "MM/dd/yyyy")}
              </td>
              <th style={{ border: "1px solid" }}>وقت الثانية</th>
              <td style={{ border: "1px solid" }}>
                {" "}
                {data.secondTime && format(new Date(data.secondTime), "H:m a")}
              </td>
            </tr>
            <tr>
              <th style={{ border: "1px solid" }}>الصافي</th>
              <td style={{ border: "1px solid" }}>{data.net}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
