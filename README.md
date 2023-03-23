
- Run Storybook to test UI

```bash
npm run storybook
```
![Screenshot 2023-03-23 at 17 03 00](https://user-images.githubusercontent.com/54837875/227154025-536efb7e-c7ff-4434-ae90-08c08550e414.png)

- Example Code

```bash
import { Table, Tbody, Td, Th, Thead, Tr, TextAlign } from "styled-react-table";

const theme = {
  tableStyle: {
    breakpoints: {
      mobile: "@media only screen and (max-width: 768px)",
      tablet: "@media only screen and (max-width: 992px)",
      desktop: "@media only screen and (min-width: 1200px)"
    },
    colors: {
      primary: "#7256f8",
      secondary: "#EFEDFD",
      dark: "#000000",
      light: "#FFFFFF",

      primaryColorScaleOne: "#EFEDFD",
      primaryColorScaleTwo: "#DEDAFA",

      fontColor: "#000000",

      grayScaleLevelOne: "#f7f7f7",
      grayScaleLevelTwo: "#a8a8a8",

      tableHeader: "#f7f7f7",
      tableBorderColor: "#e1e1e1"
    },

    fontSize: {
      mobile: "16px",
      tablet: "18px",
      desktop: "20px"
    }
  }
};

export interface Operations {
  id: string;
  operator: string;
  headsetDisplay: string;
  availability: string;
}

export interface TablePropsType {
  tableData: Operations[];
};

const headers = [
  {
    name: "Operator",
    textAlign: TextAlign.START
  },
  {
    name: "Headset Display",
    textAlign: TextAlign.START
  },
  {
    name: "3G Availability",
    textAlign: TextAlign.START
  }
];


const App: React.FC<TablePropsType> = (props) => {
  const { tableData } = props;

  return (
    <Table theme={theme}>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index} textAlign={header.textAlign}>
              {header.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tableData?.map((company: Operations) => (
          <Tr key={company.id} id={company.id}>
            <Td firstColumn>{company.operator}</Td>
            <Td>{company.headsetDisplay}</Td>
            <Td lastColumn>{company.availability}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default App;

```

[Demo](https://z7rric-3000.csb.app/)
