// under_review = [git-started ]
export const five_bytes = {
    team_name: `Five bytes`,
    helpers:[
        { 
            shortcuts: [
            { 
                linux: [
                    {clear_terminal: `CRTL + L`},
                    {create_folder: `mdkri`},
                    {list_files_and_folder: `ls`},
                    {show_persent_working_directory: `pwd`}],
                git: [
                    {status_check: `git status`},
                    {git_add_all_files: `git add .`},
                    {git_add_all_files: `git add <filename>ls`},
                    {git_commit: `git commit -m "commit message"`},]
            }],
            }]
    ,
    members: [
        { id:1,
          name: 'Dóra',
          github_account: undefined,
          pair_programming_mate: 'Tomi',
          age: 31,
          works: [{
              programming_basics: [
                    { week_1: 
                        [{ onboarding: { 
                           started: true,
                           project_git_cloned: true,
                           finished: true,
                           review: {
                            sent: true,
                            done: true, 
                            reviewer: undefined,
                            task_done: undefined
                        },
                        { spaceship: { 
                           started: true,
                           project_git_cloned: true,
                           finished: "under progress => not finished!",
                           review: {
                            sent: true,
                            done: false, 
                            reviewer: `Dóri`,
                            task_done: `2021.08.01.`
                        }
                    }},
        { id:2,
          name: 'Borbély Tamás Ferenc',
          github_account: `https://github.com/borblytams`,
          pair_programming_mate: 'Dóri',
          age: 27,
          works: [{
              programming_basics: [
                    { week_1: 
                        [{ git_started_general: { 
                           started: true,
                           project_git_cloned: true,
                           finished: true,
                           review: {
                            sent: true,
                            done: false,
                        
                        }}}
              ]
          }
              
              ]}
          ]

        }
    ]
}