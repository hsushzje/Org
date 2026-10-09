import os
import glob
from playwright.sync_api import sync_playwright

def run_verification(page):
    current_dir = os.path.abspath(os.path.dirname(__file__))
    index_path = f"file://{os.path.join(current_dir, 'index.html')}"

    page.goto(index_path)
    page.wait_for_timeout(1000)

    # Scroll map container into view
    map_container = page.locator("#leafletMap")
    map_container.scroll_into_view_if_needed()
    page.wait_for_timeout(1500)

    page.screenshot(path="/home/jules/verification/screenshots/osm_map_verification_full.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()

    videos = glob.glob("/home/jules/verification/videos/*.webm")
    print("VIDEOS:", videos)
