import { GetStaticProps } from "next";
import Header from "../components/Molecules/Header";
import { getData } from "../lib/csvData";
import ResultInput from "../components/Molecules/ResultInput";
import Footer from "../components/Footer";
import MembersSelectBox from "../components/Molecules/MembersSelectBox";
import MyDatePicker from "../components/Atom/MyDatePicker";
import InputBase from "../components/Atom/Input";
import SimpleText from "../components/Atom/SimpleText";

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage = ({ data }): JSX.Element => {
  const members: string[] = data.header;
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <div className="w-full">
            <div className="flex items-center">
              <div className="w-10 shrink-0 invisible"></div>
              <div className="w-10 shrink-0 invisible"></div>
              <div className="flex w-full shrink-1 justify-center">
                <SimpleText text={"Label"} align={"text-center"}></SimpleText>
              </div>
              <div className="flex w-full shrink-1 justify-center">
                <InputBase size="h-12 w-full" type="text"></InputBase>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center">
              <div className="w-10 shrink-0 invisible"></div>
              <div className="w-10 shrink-0 invisible"></div>
              <div className="flex w-full shrink-1 justify-center">
                <SimpleText text={"Date"} align={"text-center"}></SimpleText>
              </div>
              <div className="flex w-full shrink-1 justify-center">
                <MyDatePicker></MyDatePicker>
              </div>
            </div>
          </div>
          <div className="w-full">
            <MembersSelectBox members={members}></MembersSelectBox>
            <ResultInput></ResultInput>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

/**
 * {@linkcode Home}データエントリSSGへの値取得用のファンクション
 *
 * @returns 未使用
 */
export const getStaticProps: GetStaticProps = async () => {
  const data = getData();
  return {
    props: {
      data,
    },
  };
};

export default DataEntryPage;
