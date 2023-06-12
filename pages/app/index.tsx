import { Select, Input, IconKey } from "@supabase/ui";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "~/components/Layout";
import PartnerLinkBox from "~/components/PartnerLinkBox";
import SectionContainer from "~/components/SectionContainer";
import Editor from "@monaco-editor/react";
import { useTheme } from "~/lib/theme";
import GPT from '../../lib/gpt'

function setEditorTheme(monaco: any) {
  monaco.editor.defineTheme("onedark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "", foreground: "FFFFFF", background: "1E1E1E" }, // Cor padrão para texto
      { token: "comment", foreground: "608B4E", fontStyle: "italic" }, // Cor para comentários
      { token: "keyword", foreground: "569CD6", fontStyle: "bold" }, // Cor para palavras-chave
      { token: "string", foreground: "CE9178" }, // Cor para strings
      { token: "number", foreground: "B5CEA8" }, // Cor para números
      // Adicione mais regras para outros tipos de tokens, se necessário
    ],
    colors: {
      "editor.background": "#1E1E1E", // Cor de fundo do editor
      "editor.foreground": "#FFFFFF", // Cor do texto do editor
      "editorLineNumber.foreground": "#859FA5", // Cor das linhas numeradas
      // Adicione mais cores personalizadas, se necessário
    },
    fontFamily: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace', // Definir a fonte
  });
}


const options = {
  readOnly: false,
  minimap: { enabled: false },
  diagnostics: false,
  lint: false,
  validate: false,
  languages: {
    css: {
      validate: false,
    }
  }
} as any


function IntegrationPartnersPage() {
  const { isDarkMode } = useTheme();
  const [languageEdit, setLanguageEdit] = useState("typescript");
  const [isDivVisible, setDivVisible] = useState(false);
  const [KeyInput, KeyInputSet] = useState('');
  const [errorKey, setErrorKey] = useState(false);
  const [editorValue, setEditorValue] = useState<string>('');
  const [gptContent, setgptContent] = useState(['']);
  const [isRun, setisRun] = useState(false);

  const handleChangeKey = (event: any) => {
    KeyInputSet(event.target.value);
    setErrorKey(false)
  };

  const meta_title = "CodeCounsel";
  const meta_description = `Personalized advice to elevate your scripts.`;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setLanguageEdit(e.target.value.toLowerCase());
  }


  function RemoveClasseAnimation() {
    setTimeout(function () { // itsnone animatedDiv
      var divs = document.querySelectorAll('.itsnone');
      var delay = 1500; // 5 segundos

      for (var i = 0; i < divs.length; i++) {
        (function (index) {
          setTimeout(function () {
            divs[index].classList.remove('itsnone');
            divs[index].classList.add('animatedDiv');
          }, delay * (index + 1));
        })(i);
      }
    }, 0);
  }


  /**
   * handleButtonClick
   * 
   * @description Inicia
   */
  const handleButtonClick = async () => {

    if (isRun) {
      return window.location.reload()
    }

    setErrorKey(false)
    if (typeof KeyInput == "undefined" || KeyInput == "") {
      return setErrorKey(true)
    }

    if (typeof editorValue == "undefined" || editorValue == "") {
      return setErrorKey(true)
    }

    if (editorValue.length > 4097) {
      return setEditorValue("This model's maximum context length is 4097 tokens.")
    }

    

    setDivVisible(!isDivVisible);

    var element = document.getElementById("Recepients") as any;
    var editorId = document.getElementById("Editor") as any;
    var Rendering = document.getElementById("Rendering") as any;


    element.classList.remove("itsnone");
    element.classList.add("visible");
    editorId.classList.add("itsnone2")
    Rendering.classList.add("flexZ")


    const ResponseGPT = await GPT(KeyInput, languageEdit, editorValue) as any
    if (ResponseGPT.status) {
      setisRun(true)
      setEditorValue(ResponseGPT.content.script)
      editorId.classList.remove("itsnone2")
      Rendering.classList.remove("flexZ")
      RemoveClasseAnimation()
      setgptContent(['Name File: ' + ResponseGPT.content.filename + '[_]Language: ' + ResponseGPT.content.language + '', ResponseGPT.content.details + "[_]", ResponseGPT.content.suggestions + "[_]", ResponseGPT.content.possibleErrors + "[_]"])
    } else {
      setEditorValue('Invalid key')
      editorId.classList.remove("itsnone2")
      Rendering.classList.remove("flexZ")
    }

  };

  return (
    <>
      <Head>
        <title>{meta_title} | For Devolopers</title>
        <meta name="description" content={meta_description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

        <SectionContainer className="space-y-16">

          <div>
            <h1 className="h1">{meta_title}</h1>
            <h2 className="text-xl text-scale-900">{meta_description}</h2>
          </div>

          <div className="grid space-y-12 md:gap-8 lg:grid-cols-12 lg:gap-16 lg:space-y-0 xl:gap-16" style={{ marginTop: "15px" }}>
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="space-y-6">
                <Input size="small" icon={<IconKey />} placeholder="Key" type="password" id="key" name="id" value={KeyInput} onChange={handleChangeKey} error={errorKey ? "A valid key must be entered" : ""} />

                <Select label="Target" onChange={handleChange}>
                  <Select.Option value="TypeScript">TypeScript</Select.Option>
                  <Select.Option value="JavaScript">JavaScript</Select.Option>
                  <Select.Option value="PHP">PHP</Select.Option>
                  <Select.Option value="Python">Python</Select.Option>
                  <Select.Option value="TypeScript">React</Select.Option>
                  <Select.Option value="TypeScript">Next.js (TypeScript)</Select.Option>
                  <Select.Option value="JavaScript">Next.js (Javascript)</Select.Option>
                  <Select.Option value="TypeScript">Vue.js  (TypeScript)</Select.Option>
                  <Select.Option value="JavaScript">Vue.js  (Javascript)</Select.Option>
                </Select>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-8 lg:grid-cols-1" onClick={handleButtonClick}>
                    <PartnerLinkBox
                      href={`#`}
                      title="Correct"
                      color="brand"
                      description="Click here to start"
                      icon={
                        <svg width="64" height="64" viewBox="-8.32 -8.32 80.64 80.64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#00b30c" fill="none"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><circle cx="34.52" cy="11.43" r="5.82" /><circle cx="53.63" cy="31.6" r="5.82" /><circle cx="34.52" cy="50.57" r="5.82" /><circle cx="15.16" cy="42.03" r="5.82" /><circle cx="15.16" cy="19.27" r="5.82" /><circle cx="34.51" cy="29.27" r="4.7" /><path d="m20.17 16.3 8.73-3.37m9.7 2.66 10.88 11.93m.59 8.68-11.4 10.29M18.36 24.13l12.55 21.88m-10.6-1.27 8.39 3.89m-11.36-12 14.03-20.31m-10.85 5.23 9.82 5.55m8.88 2.7 8.59.65m-13.3 3.53.01 10.76" /></svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "none", justifyContent: "center", width: "1024px" }} id="Rendering">
              <img src="https://static.wixstatic.com/media/827ca7_369e8b02d17f417492c2b5b4ddf6d1f3~mv2.gif" style={{ colorRendering: "optimizeQuality", imageRendering: "auto", width: "400px" }} />
            </div>

            <div className="lg:col-span-8 xl:col-span-9" id="Editor">
              <div className="grid space-y-10">
                <Editor
                  beforeMount={setEditorTheme}
                  height="500px"
                  defaultLanguage={languageEdit}
                  language={languageEdit}
                  defaultValue="// some comment"
                  className="editor codigo-usuario codigo-usuario-y"
                  value={editorValue}
                  onChange={(value) => setEditorValue(value as any)}
                  theme={isDarkMode ? "onedark" : "onelight"}
                  options={options}
                />
              </div>
            </div>
          </div>



          <div className="grid grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4" id="Recepients">

            <div className="space-y-4 itsnone animatedDiv">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <PartnerLinkBox
                  href={`#`}
                  title="Initial information"
                  color="brand"
                  description=''
                  items={gptContent[0]}
                  icon={
                    <svg fill="#00fa60" height="64" width="64" viewBox="0 0 508 508" stroke="#00fa60"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" stroke="#CCC" strokeWidth="4.064" /><path d="M409.8 220.9C403.3 149.6 341.4 79.2 254 79.2c-86.4 0-156.6 70.3-156.6 156.6 0 61.7 36.8 118 92.6 143v16h-.2c-7.8 0-14.1 6.3-14.1 14.1S182 423 189.8 423h.2v16.5h-.2c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1h4.8C204 491.3 227 508 253.9 508s49.9-16.7 59.3-40.3h4.9c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-.3V423h.3c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-.3v-16c60.8-27.2 98.3-90.7 92-157.9zm-111 135.2c-5.5 2.1-9.2 7.3-9.2 13.2V444c0 19.7-16 35.7-35.7 35.7-19.7 0-35.7-16-35.7-35.7v-74.7c0-5.9-3.7-11.2-9.2-13.2-49.9-18.6-83.5-67-83.5-120.3 0-70.8 57.6-128.4 128.4-128.4 68.3 0 122.4 57.7 127.8 116.1 5.5 57.9-28.6 112.4-82.9 132.6z" /><path d="M325.3 184.1c-5.5-5.6-14.4-5.6-19.9-.1l-73.8 73.8-29-29c-5.5-5.5-14.4-5.5-20 0-5.5 5.5-5.5 14.4 0 20l39 39c2.8 2.8 6.4 4.1 10 4.1 3.6 0 7.2-1.4 10-4.1l83.7-83.7c5.5-5.5 5.5-14.4 0-20zm-264 37.6h-29c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1h29c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1zm414.4 0h-29c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1h29c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1zM254 0c-7.8 0-14.1 6.3-14.1 14.1v29c0 7.8 6.3 14.1 14.1 14.1s14.1-6.3 14.1-14.1v-29C268.1 6.3 261.8 0 254 0zM127.7 89.5 107.2 69c-5.5-5.5-14.4-5.5-20 0-5.5 5.5-5.5 14.4 0 20l20.5 20.5c5.6 5.5 14.5 5.5 20 0s5.5-14.4 0-20zm293-20.5c-5.5-5.4-14.4-5.4-19.9.1l-20.5 20.5c-5.5 5.5-5.5 14.4 0 20 5.5 5.5 14.4 5.5 20 0L420.7 89c5.5-5.5 5.5-14.4 0-20z" /></svg>
                  }
                />
              </div>

            </div>

            <div className="space-y-4 itsnone animatedDiv">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <PartnerLinkBox
                  href={`#`}
                  title="Details"
                  color="brand"
                  description=""
                  items={gptContent[1]}
                  icon={
                    <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#00bfff" stroke="#00bfff"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M448 128v320H128V128h320Zm-42.667 42.667H170.667v234.666h234.666V170.667ZM384 64v42.667l-277.334-.001V384H64V64h320Zm-21.333 234.667v42.666H213.333v-42.666h149.334Zm0-85.334V256H213.333v-42.667h149.334Z" fill="#00e1ff" fillRule="evenodd" stroke="none" /></svg>
                  }
                />
              </div>

            </div>

            <div className="space-y-4 itsnone animatedDiv">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <PartnerLinkBox
                  href={`#`}
                  title="Suggestions"
                  color="brand"
                  description="Click here to start"
                  items={gptContent[2]}
                  icon={
                    <svg width="64" height="64" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M885.746 741.427H514.972l-105.37 105.395c-.788.764-1.77 1.09-2.623 1.726-.787.59-1.333 1.42-2.228 1.922-.416.218-.875.218-1.29.416-1.53.742-3.08 1.158-4.718 1.55-1.224.284-2.404.614-3.627.7-1.551.11-3.037-.086-4.566-.306-1.376-.195-2.709-.35-4.042-.786-1.2-.416-2.292-1.028-3.43-1.64-1.551-.808-2.971-1.683-4.304-2.862-.35-.306-.787-.414-1.114-.72-.547-.548-.745-1.268-1.224-1.836-.72-.875-1.66-1.508-2.25-2.492L314.28 741.427H169.847c-49.419 0-89.487-40.07-89.487-89.485V226.875c0-49.42 40.07-89.487 89.487-89.487h715.9c49.42 0 89.486 40.069 89.486 89.487v425.067c.001 49.417-40.067 89.485-89.487 89.485zM307.07 729.26c-1.222-2.054-1.77-4.284-2.25-6.511.612 3.451 1.9 6.555 3.89 9.284l-1.64-2.773zm4.895-26.938c-.59.524-1.202.938-1.726 1.506.502-.546 1.158-1.006 1.726-1.506zm-7.669 17.87c-.087-1.18.153-2.338.264-3.518-.088.832-.482 1.53-.482 2.382 0 .393.197.742.218 1.136zm2.316-10.988c-.307.61-.656 1.158-.917 1.812.24-.635.61-1.203.917-1.812zm623.878-482.33c0-24.71-20.033-44.743-44.744-44.743H169.847c-24.71 0-44.744 20.034-44.744 44.743V651.94c0 24.71 20.035 44.743 44.744 44.743h156.602c-.326 0-.612.174-.938.195 8.04-.327 16.015 3.344 20.318 10.597l51.821 87.435 91.74-91.76c4.609-4.587 10.66-6.663 16.69-6.464h379.667c24.711 0 44.744-20.034 44.744-44.743V226.874zm-613.48 472.06c.896-.416 1.813-.612 2.73-.896-.916.285-1.856.48-2.73.896zm412.133-225.97c-24.71 0-44.744-20.032-44.744-44.743 0-24.71 20.032-44.744 44.744-44.744 24.71 0 44.743 20.034 44.743 44.744s-20.034 44.744-44.743 44.744zm-201.347 0c-24.71 0-44.744-20.032-44.744-44.743 0-24.71 20.035-44.744 44.744-44.744s44.744 20.034 44.744 44.744-20.036 44.744-44.744 44.744zm-201.347 0c-24.71 0-44.744-20.032-44.744-44.743 0-24.71 20.035-44.744 44.744-44.744s44.743 20.034 44.743 44.744-20.033 44.744-44.743 44.744z" fill="#ffe747" /></svg>
                  }
                />
              </div>

            </div>

            <div className="space-y-4 itsnone animatedDiv">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <PartnerLinkBox
                  href={`#`}
                  title="Possible Errors"
                  color="brand"
                  description="Click here to start"
                  items={gptContent[3]}
                  icon={
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0" /><g strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16h.01M12 8v4m0 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#ff2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  }
                />
              </div>

            </div>

          </div>


        </SectionContainer>

      </Layout>


    </>
  );
}

export default IntegrationPartnersPage;