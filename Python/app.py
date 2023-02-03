import requests
import streamlit as st
from streamlit_lottie import st_lottie

st.set_page_config(page_title="My Website", layout="wide")

def load_lottieurl(url):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

#assets
lottie_coding = load_lottieurl("https://assets2.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json")


# header section
with st.container():
    st.subheader("Hi, I am Furkan Öztürk :wave:")
    st.title("A Software Developer from The Netherlands")
    st.write("Made this Website to learn streamlit and python.")
    st.write("[View other website](https://turkie25.tk/ezypos/)")


# what i do
with st.container():
    st.write("---")
    left_column, right_column = st.columns(2)
    with left_column:
        st.header("What i do")
        st.write("##")
        st.write(
            """
            I am a second year Software Developer on Gilde ICT College, Roermond. Here i am learning to program and how to work with clients.
            What i have learned so far(Programming languages).\n
            -HTML\n
            -CSS\n
            -Java Script\n
            -C#\n
            -PHP\n
            -Python\n

            Im eager to learn new things with new people or companies so if ur interested in me you can Email me at.\n
            Furkan.Ozurk@student.gildeopleidingen.nl
            """
        )
    with right_column:
        st_lottie(lottie_coding, height=500, key="Coding")