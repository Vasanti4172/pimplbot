import streamlit as st

st.set_page_config(page_title="PimplBot", layout="wide")

st.title("PimplBot UI")

# Embed React App from Vercel
st.components.v1.iframe("https://pimplbot-f6nhxvv0q-vanapalli-vasanti-lakshmis-projects.vercel.app", height=600, scrolling=True)
