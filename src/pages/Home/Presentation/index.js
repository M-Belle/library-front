import styled, { ThemeProvider } from "styled-components";

const WriteUp = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <WriteUpStyle>
                    Tout le monde a chez soi une bibliothèque qui déborde et pour autant
                    l'envie irrésistible de lire toujours plus! BookOShop est une
                    application permettant d'échanger ses livres.
                </WriteUpStyle>
                <ThemeProvider theme={invertTheme}>
                    <WriteUpStyle>
                        <ul>
                            <li>
                                Complétement actuelle avec son système d'échange qui donne une
                                seconde vie au livre!
                            </li>
                            <li>
                                Loin de la surconsommation car basée sur l'échange ; pas
                                d'argent entre membres, juste de bons avis échangés!
                            </li>
                            <li>
                                Grâce à BookOShop, vous avez la possibilité d'échanger des
                                livres dans un cercle bien plus grand que votre cercle d'amis ou
                                de famille!
                            </li>
                        </ul>
                    </WriteUpStyle>
                </ThemeProvider>
            </ThemeProvider>
        </div>
    );
};

export default WriteUp;

const WriteUpStyle = styled.div`
  font-size: 1.1em;
  margin: 1em;
  padding: 1em 1em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-weight: ${(props) => props.theme.fw};
  text-align: ${(props) => props.theme.ta};
`;

const theme = {
    fg: "#2980b9",
    bg: "#eaf2f8",
    fw: "bold",
    fwli: "normal",
    ta: "normal",
    tali: "left",
};

const invertTheme = ({ fg, bg, fwli, tali }) => ({
    fg: bg,
    bg: fg,
    fw: fwli,
    ta: tali,
});
