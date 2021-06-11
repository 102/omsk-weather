FROM=d9028f7
TO=153038a

MISSING_COMMITS=$(git log $FROM..$TO --pretty=format:"%h" --reverse)

for COMMIT in $MISSING_COMMITS; do
    git checkout $COMMIT
    COMMIT_DATE=$(git show -s $COMMIT --format=%s | grep -oP '\(\K[^)]+')
    deno run --unstable --allow-read --allow-write postprocess.ts weather.json $COMMIT_DATE
done
