#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null);

function on_cell_edited(cellrenderertext, treepath, text)
{
    var [success, treeiter] = liststore.get_iter_from_string(treepath);
    liststore.set(treeiter, [1], [text]);
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CellRendererText");
window.connect("destroy", Gtk.main_quit);

let liststore = new Gtk.ListStore();
liststore.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING]);
liststore.set(liststore.append(), [0, 1], ["Antergos", "http://www.antergos.com/"]);
liststore.set(liststore.append(), [0, 1], ["Manjaro", "http://manjaro.org/"]);
liststore.set(liststore.append(), [0, 1], ["Chakra", "http://chakraos.org/"]);

let treeview = new Gtk.TreeView();
treeview.set_model(liststore);
window.add(treeview);

let cellrenderertext = new Gtk.CellRendererText();

let treeviewcolumn = new Gtk.TreeViewColumn({title: "Distribution"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 0);
treeview.append_column(treeviewcolumn);

let cellrenderertext = new Gtk.CellRendererText();
cellrenderertext.editable = true;
cellrenderertext.connect("edited", on_cell_edited);

let treeviewcolumn = new Gtk.TreeViewColumn({title: "Website"});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, "text", 1);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
