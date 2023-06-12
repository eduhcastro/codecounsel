import { Configuration, OpenAIApi } from "openai";


const Separator = (content: string, target: string) => {
  const regex = new RegExp(`\\[${target}\\]([\\s\\S]+?)\\[\\/${target}\\]`);
  const correspondencia = content.match(regex);

  if (correspondencia && correspondencia.length > 1) {
    const conteudo = correspondencia[1];
    return conteudo;
  } else {
    return null;
  }
};



const Request = (target: string, script: string) => {
  return `
  Hello GPT, your name is now [IT Senior], You are now a Senior Level IT professional, the highest and one of the brightest job in this business, your job now is to help me with this following script. Take a good look, observe this code, your job is to optimize it (if you have classes, functions or something else, that can be optimized and improved) organize (organize the code being the structure, the names of the variables, and everything that should be and can be organized) and document it (you must document the code, putting notes, references, everything a professional code must have, if you have an obligation to put the author , put (CodeCounsel) year 2023) remember, everything must be done in the most professional way possible, you are a strict person of the highest order, do everything down to the smallest detail.
  The chosen language is: ${target}
  Separate into parts, example
  [FileName]here you will name the file[/FileName]
  [Language]Here you will speak the language of the script[/Language]
  [Script]end the script here, optimized, organized and documented in the best and most professional way, as I asked above.[/Script]
  [Details]in this part you will talk about why you made each change, if you did.[/Details]
  [Suggestions]In this part you will give suggestions if possible.[/Suggestions]
  [PossibleErrors]here you can mention the possible script errors, if you have[/PossibleErrors]
  Remember, use the most advanced rules and most professional codes possible, safe and practical, be strict and judicious.
  ${script}
  `
}

export default async function handler(key: string, target: string, script: string) {
  try {

    if (typeof key == "undefined" || typeof target == "undefined" || typeof script == "undefined") {
      return {
        status: false,
        mensagem: 'Parametors invalidos'
      }
    }

    const configuration = new Configuration({
      apiKey: key
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: Request(target, script) }],
    }) as any;


    let message = completion.data.choices[0].message.content

    return {
      status: true,
      content: {
        filename: Separator(message, "FileName"),
        language: Separator(message, "Language"),
        script: Separator(message, "Script"),
        details: Separator(message, "Details"),
        suggestions: Separator(message, "Suggestions"),
        possibleErrors: Separator(message, "PossibleErrors"),
      }
    }

  } catch (error: any) {

    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    return {
      status: false
    }
  }
}